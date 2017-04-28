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
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'img/[name].[hash:7].[ext]'
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'fonts/[name].[hash:7].[ext]'
      }
    }
  ]
}