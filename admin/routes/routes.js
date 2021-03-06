'use strict'

var express = require('express'),
    path = require('path'),
    passport = require('passport'),
    csrf = require('csurf'),
    admin = require('./admin'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    engines = require('consolidate'),
    authControl = require('connect-ensure-login'),
    ensureLoggedIn = authControl.ensureLoggedIn,
    ensureLoggedOut = authControl.ensureLoggedOut

/**
 * Authentication Routes
 */

router.post('/login', 
          bodyParser.urlencoded({ extended: false }), csrf(),
          passport.authenticate('local', {
            successRedirect: '/admin',
            failureRedirect: '/login',
            failureFlash: true
          }))

router.get('/login', csrf(), ensureLoggedOut('/admin'), (req, res) => {
  engines.ejs(path.resolve(__dirname, '../dist/views/login.ejs'), {
    csrf: req.csrfToken(),
    message: req.flash('message')
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

// unauthenticated static files for admin backend
router.use('/admin/static', express.static(path.resolve(__dirname, '../static')))

// authenticated static files for admin backend
router.use('/admin/static', ensureLoggedIn('/login'), express.static(path.resolve(__dirname, '../dist')))

router.use('/admin', ensureLoggedIn('/login'), admin)


// Export
module.exports = router
