'use strict'

var express = require('express'),
    session = require('express-session'),
    passport = require('passport'),
    helmet = require('helmet'),
    path = require('path'),
    sequelize = require('sequelize')

var env = require('./.env'),
    helpers = require('./helpers'),
    admin = require('./admin/routes/routes'),
    routes = require('./content/themes/' + env.activeTheme.name + '/routes')

process.env.PORT = process.env.PORT || 8080
process.env.NODE_ENV = env.env

var app = express(),
    sess = {
      secret: helpers.randomString(16),
      cookie: {}
    }

/**
 * Settings
 */

if (env.env === 'production') {
  var forceSSL = require('express-force-https'),
      compression = require('compression')

  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
  app.use(forceSSL) // force SSL
  app.use(compression()) // turn on compression
}

app.use(express.static(path.resolve(__dirname, './content/static')))

app.set('view engine', env.activeTheme.viewEngine)
app.set('views', './content/themes/' + env.activeTheme.name + '/views')

/**
 * Authentication
 */

var db = new sequelize(env.db.name, env.db.username, env.db.password, env.db.settings)
var User = require('./database/models/User')(db)

User.sync().then(() => {
  var hashData = helpers.hash(env.admin.password, helpers.randomString(16))
  
  User.findOrCreate({
    where: {
      username: env.admin.username
    },
    defaults: {
      username: env.admin.username,
      password: hashData.hash,
      salt: hashData.salt
    }
  })
})

var LocalStrategy = require('passport-local')
var strategy = new LocalStrategy((username, password, done) => {
  User.findOne({
    attributes: ['salt'],
    where: { username: username }
  }).then((row) => {
    if (!row) return done(null, false, { message: 'Unknown user' })
    var hash = helpers.hash(password, row.salt).hash

    User.findOne({
      attributes: { exclude: ['password'] },
      where: { username: username, password: hash }
    }).then((user) => {
      (user) ? done(null, user)
             : done(null, false, { message: 'Invalid password' })
    }, (err) => {
      done(err, null)
    })
  }, (err) => {
    done(err, null)
  })
})

passport.use(strategy)
passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((id, done) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: { id: id }
  }).then((user) => {
    done(null, user)
  }, (err) => {
    done(err, null)
  })
})

app.use(helmet())
app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session())

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
