var express = require('express')
var passport = require('passport')
var router = express.Router()
var authControl = require('connect-ensure-login')
var ensureLoggedIn = authControl.ensureLoggedIn
var ensureLoggedOut = authControl.ensureLoggedOut

/**
 * Authentication Routes
 */

router.get('/login/callback', passport.authenticate('auth0', { successReturnToOrRedirect: '/admin', failureRedirect: '/login' }))

router.get('/login', ensureLoggedOut('/admin'), function(req, res) {
    res.render('admin/login', {
        title: 'Login',
        client_id: process.env.AUTH0_CLIENT_ID,
        domain: process.env.AUTH0_DOMAIN,
        callback: process.env.AUTH0_CALLBACK_URL,
    })
})

router.get('/logout', ensureLoggedIn('/'), function(req, res){
    req.logout()
    res.redirect('/login')
})

/**
 * App Routes
 */
router.get('/', function(req, res) {
  res.render('index')
})


// Export
module.exports = router