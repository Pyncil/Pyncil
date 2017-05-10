'use strict'

var path = require('path'),
    rm = require('rimraf'),
    webpack = require('webpack'),
    moduleLoaders = require('./loaders'),
    checkVersions = require('./check-versions'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),
    CompressionWebpackPlugin = require('compression-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', '..', dir)
}

var build = function (env) {
  var webpackConfig = {
    entry: {
      app: resolve('admin/frontend/main.js')
    },
    output: {
      path: resolve('admin/dist'),
      publicPath: '/admin/static/',
      filename: 'js/[name].[chunkhash].js',
      chunkFilename: 'js/[id].[chunkhash].js'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      modules: [
        resolve('admin/frontend'),
        resolve('content/plugins'),
        resolve('node_modules')
      ],
      alias: {
        'views': resolve('admin/frontend/views'),
        'plugins': resolve('content/plugins'),
        'vue$': 'vue/dist/vue.common.js',
      }
    },
    module: {
      rules: moduleLoaders(env)
    },
    devtool: env.development ? '#source-map' : false,
    plugins: [
      // short-circuits all Vue.js warning code
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env.production ? 'production' : (env.development ? 'development' : process.env.NODE_ENV))
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: env.development
      }),
      // extract css into its own file
      new ExtractTextPlugin({
        filename: 'css/[name].[contenthash].css'
      }),
      new OptimizeCSSPlugin(),
      // generate dist index.ejs with correct asset hash for caching.
      new HtmlWebpackPlugin({
        filename: 'views/index.ejs',
        template: resolve('admin/views/index.ejs'),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
          // more options:
          // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
      }),
      new HtmlWebpackPlugin({
        filename: 'views/login.ejs',
        template: resolve('admin/views/login.ejs'),
        inject: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
      }),
      // split vendor js into its own file
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module, count) {
          // any required modules inside node_modules are extracted to vendor
          return (
            module.resource &&
            /\.js$/.test(module.resource) &&
            module.resource.indexOf(
              resolve('node_modules')
            ) === 0
          )
        }
      }),
      // extract webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor']
      }),
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: resolve('admin/static'),
          to: resolve('admin/dist'),
          ignore: ['.*', '*.ejs']
        }
      ])
    ]
  }

  if (env === 'development') {
    webpackConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin())
    webpackConfig.plugins.push(new FriendlyErrorsPlugin())
  } else if (env === 'production') {
    webpackConfig.plugins.push(
      new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' + ['js', 'css'].join('|') + ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }
  
  return webpackConfig
}

module.exports = (env) => {
  // check versions and remove old
  checkVersions()
  rm(resolve('admin/dist'), (err) => { if (err) throw err })
  
  // build
  return build(env)
}