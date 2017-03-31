var express = require('express')
var http = require('http')
var cli = require('child_process').exec
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

router.get('/dependencies', function(req, res) {
    cli('npm ls --json --prod', function(err, stdout, stderr) {
        if (err) return res.send(err)
        res.send(stdout)
    })
})

module.exports = router