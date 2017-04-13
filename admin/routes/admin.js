var express = require('express')
var env = require('../../.env')
var requireAjax = require('../../helpers').middleware.requireAjax
var router = express.Router()


/**
 * AJAX Routes
 */

router.get('/ajax-call', requireAjax({ 'redirect' : '/' }), (req, res) => {
  var obj = {'hello' : true}
  res.send(obj)
})


/**
 * Catch-all to render index
 */

router.get('/', (req, res) => {
  res.render('index', { title: env.title, user: req.user })
})

router.use((req, res, next) => res.redirect('/'))


// export
module.exports = router
