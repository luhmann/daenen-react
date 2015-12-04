var path = require('path');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
.filter(function(x) {
  return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
  nodeModules[mod] = 'commonjs ' + mod;
});

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'server');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
  entry: APP_PATH,
  target: 'node',
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    moduleDirectories: [
      'app/client',
      'app/server'
    ]
  },
  externals: nodeModules,
  output: {
    path: BUILD_PATH,
    filename: 'server.js'
  },
  module: {
    loaders: [
      {
          test: /\.jsx$/,
          loaders: ['babel'],
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
      },
      {
        test: /\.json$/,
        loaders: ['json'],
      },
      {
        test: /\.svg$/,
        loaders: ['url'],
      },
      {
        test: /\.html$/,
        loaders: ['template-string'],
      },
      {
        // use css/locals for calculating the css-module styles on the server
        // @see https://github.com/webpack/css-loader/issues/59
        test: /\.styl$/,
        loader: 'css/locals?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
      }
    ]
  },
  plugins: []
}
