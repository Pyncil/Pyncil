var express = require('express')
var passport = require('passport')
var env = require('../../.env')
var admin = require('./admin')
var router = express.Router()
var authControl = require('connect-ensure-login')
var ensureLoggedIn = authControl.ensureLoggedIn
var ensureLoggedOut = authControl.ensureLoggedOut

/**
 * Authentication Routes
 */

router.get('/login/callback', passport.authenticate(env.strategy, { successReturnToOrRedirect: '/admin', failureRedirect: '/login' }))

router.get('/login', ensureLoggedOut('/admin'), (req, res) => {
  res.render('admin/login-' + env.strategy, {
    title: 'Login',
    client_id: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_DOMAIN,
    callback: process.env.AUTH0_CALLBACK_URL,
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
