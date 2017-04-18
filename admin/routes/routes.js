'use strict'

var express = require('express'),
    path = require('path'),
    passport = require('passport'),
    env = require('../../.env'),
    admin = require('./admin'),
    router = express.Router(),
    ejs = require('ejs'),
    authControl = require('connect-ensure-login'),
    ensureLoggedIn = authControl.ensureLoggedIn,
    ensureLoggedOut = authControl.ensureLoggedOut

/**
 * Authentication Routes
 */

router.get('/login/callback', passport.authenticate(env.strategy, { successReturnToOrRedirect: '/admin', failureRedirect: '/login' }))

router.get('/login', ensureLoggedOut('/admin'), (req, res) => {
  var file = path.resolve(__dirname, '../dist/html/login-' + env.strategy + '.html')
  ejs.renderFile(file, {
    client_id: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_DOMAIN,
    callback: process.env.AUTH0_CALLBACK_URL,
  }, (err, str) => {
    if (err) return res.send(err)
    res.send(str)
  })
})

router.get('/logout', ensureLoggedIn('/'), (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.send(err)
    res.redirect('/')
  })
})


/**
 * Admin Routes
 */

router.use('/admin', ensureLoggedIn('/login'), admin)


// Export
module.exports = router
