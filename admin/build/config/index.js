'use strict'

var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../../../admin'),
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/admin/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 3000,
    assetsSubDirectory: 'dist',
    assetsPublicPath: '/admin/',
    proxyTable: {
      '/admin/dist' : 'http://localhost:3000'
    },
    cssSourceMap: false
  }
}