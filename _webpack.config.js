var sliceArgs = Function.prototype.call.bind(Array.prototype.slice);
var toString  = Function.prototype.call.bind(Object.prototype.toString);
var NODE_ENV  = process.env.NODE_ENV || 'development';
var pkg = require('./package.json');
Object.assign = require('object-assign');
var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
var CommonsChunkPlugin   = webpack.optimize.CommonsChunkPlugin;
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var DedupePlugin   = webpack.optimize.DedupePlugin;
var DefinePlugin   = webpack.DefinePlugin;
var BannerPlugin   = webpack.BannerPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

/*
 * Config
 */
module.exports = {
  devtool: 'source-map',
  debug: false,
  cache: true,
  context: __dirname,
  stats: {
    chunks: false,
    colors: true,
    reasons: true
  },

  entry: {
    'bundle': [
      'es6-shim',
      'rxjs',
      'zone.js',
      'reflect-metadata',
      '@angular/core',
      './src/main'
    ],
  },

  // Config for our build files
  output: {
    path: __dirname + '/src/build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },

  resolve: {
    root: __dirname,
    extensions: ['','.js','.jsx','.ts','.json', '.scss', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [/node_modules/]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loaders: ['sass', 'sass-resources']
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)(\?[a-z0-9]+)?$/,
        loaders: [
          'file?name=images/[name].[hash].[ext]'
        ]
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw'
      }
    ]
  },
  // Or array of paths
  sassResources: [
    'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss',
    'node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss',
    'src/assets/_common.scss'
  ],

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'VERSION': JSON.stringify(pkg.version)
    }),
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new CommonsChunkPlugin('bundle','bundle.js',Infinity),
    new CommonsChunkPlugin('common','common.js'),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3100,
      proxy: 'http://localhost:3000'
    },
    {
      reload: true
    })
  ]
};
