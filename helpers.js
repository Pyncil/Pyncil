var crypto = require('crypto')
var http = require('http')

module.exports = (function() {
  var self = this
  
  this.middleware = {
    requireAjax(options) {
        return function requireAjax(req, res, next) {
          if (req.xhr || req.headers.accept.indexOf('json') > -1)
            next()
          else if (options.redirect)
            res.redirect(options.redirect)
          else
            res.send(404, http.STATUS_CODES[404])
        }
    }
  }

  this.randomString = function(length){
    return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0, length)
  }

  this.hash = function(string, salt) {
    var hash = crypto.createHmac('sha512', salt)
    hash.update(string)
    return {
      hash: hash.digest('hex'),
      salt: salt
    }
  }

  return this
})()
