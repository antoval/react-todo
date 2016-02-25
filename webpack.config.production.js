var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/index.jsx'
  ],
  output: {
    path: path.join(__dirname, '/client/build'),
    filename: 'bundle.js',
    publicPath: '/client'
  },
  resolve: {
    extensions: ['', '.react.js', '.js', '.jsx', '.scss'],
    modulesDirectories: [
      "client", "node_modules"
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {

    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.js$|\.jsx$/,
        loaders: ["babel?presets[]=react&presets[]=es2015"],
        exclude: /node_modules/,
        include: path.join(__dirname, 'client')
      }, {
        test: /\.json$/,
        loader: 'json'
      }]
  }

};
