var express = require('express')
var session = require('express-session')
var passport = require('passport')
var Auth0Strategy = require('passport-auth0')
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn
var forceSSL = require('express-force-https')
var helmet = require('helmet')
var csrf = require('csurf')
var compression = require('compression')

var admin = require('./routes/admin')
var routes = require('./routes/routes')
var env = require('./.env')

var app = express()
var sess = {
  secret: env.secretKey,
  cookie: {}
}

/**
 * Settings
 */

env.setupEnvironment()

app.use(express.static('static'))
app.set('view engine', 'pug')
app.set('views', './views')

// Authentication
var strategy = new Auth0Strategy(env.auth0, 
  function(accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile)
  })

passport.use(strategy)
passport.serializeUser(function(user, done) { done(null, user) })
passport.deserializeUser(function(user, done) { done(null, user) })

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
  app.use(compression()) // turn on compression
}


/**
 * Middleware
 */

app.use(helmet())
app.use(forceSSL)
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
