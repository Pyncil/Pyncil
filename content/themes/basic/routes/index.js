var express = require('express')
var router = express.Router()

/**
 * App Routes
 */

router.get('/', function(req, res) {
  res.render('index')
})


/**
 * Error handling and 404
 */

router.use((req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

router.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = process.env.NODE_ENV === 'development' ? err : {}

  // render the error page
  err.status = err.status || 500
  res.status(err.status)
  
  res.render('errors/' + err.status)
})


// Export
module.exports = router
