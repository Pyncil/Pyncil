var express = require('express')
var session = require('express-session')
var passport = require('passport')
var helmet = require('helmet')
var csrf = require('csurf')
var path = require('path')

var env = require('./.env')
var helpers = require('./helpers')
var admin = require('./admin/routes/routes')
var routes = require('./content/themes/' + env.activeTheme + '/routes')

var app = express()
var sess = {
  secret: env.secretKey,
  cookie: {}
}

if (env.env === 'production') {
  var forceSSL = require('express-force-https')
  var compression = require('compression')

  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
  app.use(forceSSL) // force SSL
  app.use(compression()) // turn on compression
}

/**
 * Settings
 */

env.setupEnvironment()

app.use(express.static(path.join(__dirname, 'content', 'static')))
app.use('/admin/static', express.static(path.join(__dirname, 'admin', 'static')))

app.set('view engine', 'pug')
app.set('views', ['./admin/views', './content/themes/' + env.activeTheme + '/views'])

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


/**
 * Middleware
 */

app.use(helmet())
app.use(session(sess))
app.use(csrf())
app.use(passport.initialize())
app.use(passport.session())


/**
 * Routes
 */

app.use(admin)
app.use(routes)


// Export to the server
module.exports = app