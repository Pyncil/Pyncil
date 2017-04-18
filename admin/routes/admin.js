'use strict'

var express = require('express'),
    path = require('path'),
    requireAjax = require('../../helpers').middleware.requireAjax,
    router = express.Router()


/**
 * Render Index
 */

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/html/index.html'))
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
