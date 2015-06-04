// Both development (hot) and production share this webpack config. It
// compiles the JS for the browser into a nice single file.
var webpack = require('webpack');

module.exports = {
  // Top level file that requires all the other files for the browser.
  entry: ["./client_entry"],

  // The single compiled file will be build/bundle.js
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  module: {
    loaders: [
      // Babel is a transpiler that supports ES6 and JSX
      { test: /\.js$/, exclude: /(node_modules)|(bootstrap.*\.js)/, loaders: ['babel-loader']}
    ]
  },

  plugins: [],

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  }
};
