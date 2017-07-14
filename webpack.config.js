const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  module:{
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css!postcss!sass'
        )
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'scripts.js'
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
