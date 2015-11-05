var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'client', 'javascripts');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    alias: {},
    modulesDirectories: [
      'app/client',
      'node_modules'
    ]
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
          test: /\.jsx$/,
          loaders: ['babel'],
          include: [ APP_PATH ]
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [ APP_PATH ]
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: APP_PATH
      },
    ]
  },
  plugins: []
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      noInfo: true
    },
    module: {
      loaders: [
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin( { title: 'Softwarehaus Dänen4'} )
    ]
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    output: {
      path: BUILD_PATH,
      filename: '[name].js?[chunkhash]'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus'),
          include: APP_PATH
        }
      ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
      new Clean(['build']),
      new ExtractTextPlugin('styles.css?[chunkhash]'),
      new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(de)$/),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}
