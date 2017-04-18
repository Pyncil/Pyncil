'use strict'

require('./check-versions')()

var path = require('path'),
    config = require('./config'),
    express = require('express'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.dev.conf')

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static(path.resolve(__dirname, '../dist')))

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at http://localhost:' + config.dev.port + '\n')
})

module.exports = app.listen(config.dev.port, (err) => {
  if (err) return console.log(err)
})