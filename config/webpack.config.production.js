// Load up the common config so we can add stuff to it.
var config = require('./webpack.config');
var webpack = require('webpack');

var prod = {
  // Minify and optimize the generated package.  It's slower and hides debug
  // information so we only use it for production.
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
};

// Merge
config.plugins = config.plugins.concat(prod.plugins)

module.exports = config;