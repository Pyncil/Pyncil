'use strict'

var express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    helmet = require('helmet'),
    csrf = require('csurf'),
    path = require('path'),
    bodyParser = require('body-parser')

var env = require('./.env'),
    helpers = require('./helpers'),
    admin = require('./admin/routes/routes'),
    routes = require('./content/themes/' + env.activeTheme.name + '/routes')

var app = express(),
    sess = {
      secret: env.secretKey,
      cookie: {}
    }

/**
 * Settings
 */

env.setupEnvironment()

if (env.env === 'production') {
  var forceSSL = require('express-force-https'),
      compression = require('compression')

  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
  app.use(forceSSL) // force SSL
  app.use(compression()) // turn on compression
}

app.use(express.static(path.resolve(__dirname, './content/static')))
app.use('/admin/dist', express.static(path.resolve(__dirname, './admin/dist')))

app.set('view engine', env.activeTheme.viewEngine)
app.set('views', './content/themes/' + env.activeTheme.name + '/views')

// Authentication
if (env.strategy === 'auth0') {
  var Auth0Strategy = require('passport-auth0')
  var strategy = new Auth0Strategy(env.auth0,
    (accessToken, refreshToken, extraParams, user, done) => done(null, user))

  passport.use(strategy)
  passport.serializeUser((user, done) => done(null, user))
  passport.deserializeUser((user, done) => done(null, user))
} else if (env.strategy === 'local') {
  var sqlite3 = require('sqlite3').verbose()
  var db = new sqlite3.Database(':memory:')

  db.serialize(function() {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username , password, salt)')
    var stmt = db.prepare('INSERT INTO users (username, password, salt) VALUES (?, ?, ?)')
    var hashData = helpers.hash(env.local.password, helpers.randomString(16))
    stmt.run(env.local.username, hashData.hash, hashData.salt)
    stmt.finalize()
  })

  var LocalStrategy = require('passport-local')
  var strategy = new LocalStrategy((username, password, done) => {
    db.get('SELECT salt FROM users WHERE username = ?', username, (err, row) => {
      if (!row) return done(null, false)
      var hash = helpers.hash(password, row.salt)
      db.get('SELECT username, id FROM users WHERE username = ? AND password = ?', username, hash, (err, user) => {
        return err ? done(err)
                : user ? done(null, user) : done(null, false)
      })
    })
  })

  passport.use(strategy)
  passport.serializeUser((user, done) => done(null, user.id))
  passport.deserializeUser((id, done) => {
    db.get('SELECT id, username FROM users WHERE id = ?', id, (err, user) => {
      return user ? done(null, user) : done(null, false)
    })
  })
}

// Development build of frontend
/*
if (env.env === 'development') {
  // https://github.com/chimurai/http-proxy-middleware
  var proxy = require('http-proxy-middleware'),
      proxyTable = require('./admin/build/config').dev.proxyTable

  // proxy api requests
  Object.keys(proxyTable).forEach((context) => {
    var options = proxyTable[context]
    if (typeof options === 'string')
      options = { target: options }

    app.use(proxy(options.filter || context, options))
  })
}
*/

/**
 * Middleware
 */

app.use(helmet())
app.use(session(sess))
app.use(csrf())
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (env.env === 'development') {
  app.use(require('morgan')('dev'))
}


/**
 * Routes
 */

app.use(admin)
app.use(routes)


// Export to the server
module.exports = app
