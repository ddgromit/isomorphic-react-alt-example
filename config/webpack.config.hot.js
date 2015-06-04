// Load up the common config so we can add stuff to it.
var config = require('./webpack.config');
var webpack = require('webpack');

var hot = {
  plugins: [
    // Enables hot reloading development
    new webpack.HotModuleReplacementPlugin(),
    // Keeps the page from repeatedly reloading if there's errors.
    new webpack.NoErrorsPlugin()
  ],

  // Extra "entry" points required for doing hot reloading
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server'
  ]
};

// Merge
config.plugins = config.plugins.concat(hot.plugins)
config.entry = config.entry.concat(hot.entry)

module.exports = config;