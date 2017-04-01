var express = require('express')
var session = require('express-session')
var passport = require('passport')
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
var helmet = require('helmet')
var csrf = require('csurf')

var helpers = require('./helpers')
var admin = require('./routes/admin')
var routes = require('./routes/routes')
var env = require('./.env')

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

app.use(express.static('static'))
app.set('view engine', 'pug')
app.set('views', './views')

// Authentication
if (env.strategy === 'auth0') {
  var Auth0Strategy = require('passport-auth0')
  var strategy = new Auth0Strategy(env.auth0,
    function(accessToken, refreshToken, extraParams, user, done) {
      return done(null, user)
    })

  passport.use(strategy)
  passport.serializeUser(function(user, done) { done(null, user) })
  passport.deserializeUser(function(user, done) { done(null, user) })
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
  var strategy = new LocalStrategy(function (username, password, done) {
    db.get('SELECT salt FROM users WHERE username = ?', username, function (err, row) {
      if (!row) return done(null, false)
      var hash = helpers.hash(password, row.salt)
      db.get('SELECT username, id FROM users WHERE username = ? AND password = ?', username, hash, function(err, user) {
        if (err) { return done(err) }
        if (!user) return done(null, false)
        return done(null, user)
      })
    })
  })

  passport.use(strategy)
  passport.serializeUser(function(user, done) { return done(null, user.id) })
  passport.deserializeUser(function(id, done) {
    db.get('SELECT id, username FROM users WHERE id = ?', id, function(err, user) {
      if (!user) return done(null, false)
      return done(null, user)
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

app.use('/admin', ensureLoggedIn('/login'), admin)
app.use('/', routes)

/**
 * Server Setup
 */

app.listen(process.env.PORT, function(){
  console.log("Server listening on port " + process.env.PORT + ".")
})
