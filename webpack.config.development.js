var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './client/index.jsx'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
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
