var express = require('express')
var http = require('http')
var ncu = require('npm-check-updates')
var router = express.Router()

/**
 * GET Routes
 */

router.get('/', function(req, res) {
    res.render('admin/index', { title: 'Home', user: req.user })
})

router.get('/manage-dependencies', function(req, res) {
    res.render('admin/dependencies', { title: 'Manage Dependencies', user: req.user })
})


/**
 * AJAX Routes
 */
 
router.use(function(req, res, next) {
    if(req.xhr || req.headers.accept.indexOf('json') > -1) next()
    else res.send(404, http.STATUS_CODES[404])
})

router.get('/check-for-updates', function(req, res) {
  ncu.run({
    packageFile: 'package.json',
    jsonUpgraded: true
  }).then((outdated) => {
    res.send(outdated)
  }).catch((err) => {
    res.send(err)
  })
})

router.get('/update-modules', function(req, res) {
  ncu.run({
    packageFile: 'package.json',
    upgrade: true,
    removeRange: true
  }).then((upgraded) => {
    res.send(upgraded)
  }).catch((err) => {
    res.send(err)
  })
})

module.exports = router