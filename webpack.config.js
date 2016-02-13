// jscs:disable requireCamelCaseOrUpperCaseIdentifiers

var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var merge = require('webpack-merge');
var autoprefixer = require('autoprefixer');
var Clean = require('clean-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'client', 'javascripts');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist', 'public');

process.env.BABEL_ENV = TARGET;
process.env.BROWSER = true;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    alias: {},
    modulesDirectories: [
      'app/client',
      'node_modules',
    ],
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loaders: ['babel'],
        include: [APP_PATH],
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: [APP_PATH],
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        include: [APP_PATH],
      },
      {
        test: /\.svg$/,
        loaders: ['url'],
        include: path.resolve(ROOT_PATH, 'client', 'images'),
      },
    ],
  },
  plugins: [],
};

if (TARGET === 'start-react' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' },
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      noInfo: true,
    },
    module: {
      loaders: [
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        appMountId: 'app',
        inject: false,
        mobile: true,
        template: 'client/index.ejs',
        title: 'Softwarehaus Dänen4',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
    ],
  });
}

if (TARGET === 'watch-react') {
  module.exports = merge(common, {
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('app.css', { allChunks: true }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlwebpackPlugin({
        appMountId: 'app',
        inject: false,
        mobile: true,
        template: 'client/index.ejs',
        title: 'Softwarehaus Dänen4',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      })
    ],
  });
}

if (TARGET === 'build-react') {
  module.exports = merge(common, {
    output: {
      path: BUILD_PATH,
      filename: '[name].js?[chunkhash]',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'),
        },
      ],
    },
    postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
    plugins: [
      new Clean(['dist']),
      new CopyWebpackPlugin([{ from: 'client/favicon.ico' }]),
      new ExtractTextPlugin('app.css?[chunkhash]'),
      new HtmlwebpackPlugin({
        appMountId: 'app',
        favIcon: '/static/facivon.ico',
        inject: false,
        mobile: true,
        template: 'client/index.ejs',
        title: 'Softwarehaus Dänen4',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
        },
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  });
}
