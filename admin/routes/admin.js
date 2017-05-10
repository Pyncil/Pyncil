'use strict'

var express = require('express'),
    path = require('path'),
    engines = require('consolidate'),
    requireAjax = require('../../helpers').middleware.requireAjax,
    router = express.Router()


/**
 * Render Index & Static Files
 */

router.use('/static', express.static(path.resolve(__dirname, '../dist')))

router.get('/', (req, res) => {
  engines.ejs(path.resolve(__dirname, '../dist/views/index.ejs'), {
    user: req.user
  }, (err, str) => {
    if (err) return res.send(err)
    res.send(str)
  })
})


// AJAX-Only Middleware
router.use(requireAjax({ 'redirect' : '/' }))

/**
 * AJAX Routes
 */

router.get('/ajax-call', (req, res) => {
  var obj = {'hello' : true}
  res.send(obj)
})


// export
module.exports = router
