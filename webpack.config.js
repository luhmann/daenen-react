var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var merge = require('webpack-merge');
var autoprefixer = require('autoprefixer');
var Clean = require('clean-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'client', 'javascripts');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

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
      {
        test: /\.svg$/,
        loaders: ['file'],
        include: path.resolve(ROOT_PATH, 'client', 'images')
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
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus')
        }
      ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
      new Clean(['build']),
      new ExtractTextPlugin('styles.css?[chunkhash]'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}