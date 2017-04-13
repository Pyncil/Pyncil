var express = require('express')
var env = require('../../.env')
var requireAjax = require('../../helpers').middleware.requireAjax
var router = express.Router()


/**
 * Render Index
 */

router.get('/', (req, res) => {
  res.render('admin/index', { title: env.title, user: req.user })
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
