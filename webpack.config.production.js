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
  module: {
    loaders: [{
      test: /\.js$|\.jsx$/,
      loaders: ["babel?presets[]=react&presets[]=es2015"],
      exclude: /node_modules/,
      include: path.join(__dirname, 'client')
    },{
      test: /\.json$/,
      loader: 'json'
    },{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
