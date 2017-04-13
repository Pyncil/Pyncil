var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'admin', 'frontend', 'main.js'),
  output: {
    path: path.join(__dirname, 'static', 'js'),
    publicPath: '/js/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      path.join(__dirname, 'admin', 'frontend'),
      path.join(__dirname, 'content'),
      path.join(__dirname, 'node_modules')
    ],
    alias: {
      'views': path.join(__dirname, 'admin', 'frontend', 'views'),
      'plugins': path.join(__dirname, 'content', 'plugins'),
      'themes': path.join(__dirname, 'content', 'themes'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
