'use strict'

var path = require('path'),
    utils = require('./utils'),
    webpack = require('webpack'),
    config = require('./config'),
    merge = require('webpack-merge'),
    baseWebpackConfig = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  output: {
    filename: utils.assetsPath('js/[name].js'),
    chunkFilename: utils.assetsPath('js/[id].js')
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.cssSourceMap ? '#cheap-module-eval-source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: utils.assetsPath('html/index.html'),
      template: path.resolve(__dirname, '../static/html/index.html'),
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})