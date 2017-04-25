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

  this.admin = { // initial admin login info
    username: 'admin',
    password: 'admin'
  }

  this.db = { // Database config (SQL only)
    name: 'primary', // name of the database
    username: 'postgres', // username of database owner
    password: 'password', // password for database owner (null if no password)
    settings: {
      host: 'localhost', // change for remote database hosting
      dialect: 'postgres', // one of [ 'postgres', 'mysql', 'sqlite3' ] - only tested for postgresql
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      storage: 'database/db.sqlite' // SQLite only
    }
  }

  this.setupEnvironment = function() {
    process.env.PORT = process.env.PORT || self.port
    process.env.NODE_ENV = self.env
  }

  return self
})()
