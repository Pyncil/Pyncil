'use strict'

var styleLoaders = require('./style-loaders'),
    formatter = require('eslint-friendly-formatter')

module.exports = (env) => {
  return [
    {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: "pre",
      options: {
        formatter: formatter
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: styleLoaders.cssLoaders({
          sourceMap: env.development,
          minimize: env.production,
          extract: env.production
        }),
        postcss: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      }
    },
    {
      test: /\.ejs$/,
      loader: 'raw-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader'
    }
  ]
}