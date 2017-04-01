var crypto = require('crypto')

module.exports = (function() {
  var self = this

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
