'use strict'
module.exports = new (function() {
  var self = this

  this.title = 'My App'
  this.activeTheme = {
    name: 'basic',
    viewEngine: 'pug'
  }

  this.env = 'development' // or 'production'
  this.url = 'example.com' // public url, use 'localhost' if on localhost
  this.port = '8080' // any port >= 3000
  this.secretKey = 'halla at cho boi' // some random, creative string

  this.strategy = 'auth0' // or 'local'
  this.auth0 = {
    domain: '***.auth0.com',
    clientID: '{{ ClientID }}',
    clientSecret: '{{ ClientSecret }}',
    callbackURL: 'https://' + self.url + '/login/callback'
  }
  this.local = {
    username: 'admin',
    password: 'admin'
  }

  this.setupEnvironment = function() {
    process.env.PORT = process.env.PORT || self.port
    process.env.NODE_ENV = self.env

    process.env.AUTH0_CLIENT_ID = self.auth0.clientID
    process.env.AUTH0_CLIENT_SECRET = self.auth0.clientSecret
    process.env.AUTH0_DOMAIN = self.auth0.domain
    process.env.AUTH0_CALLBACK_URL = self.auth0.callbackURL
  }

  return self
})()
