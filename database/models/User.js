'use strict'
var sequelize = require('sequelize')

module.exports = function (db) {
  return db.define('User', {
      username: sequelize.STRING,
      password: sequelize.STRING,
      salt: sequelize.STRING
    })
}