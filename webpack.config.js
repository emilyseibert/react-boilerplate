/* eslint-disable no-var */
import path from 'path';

module.exports = {
  entry: path.join(__dirname, 'src/js/index.js'),
  output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      publicPath: '/static/'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
      }
    ]
  }
};
