var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/static');
var APP_DIR = path.resolve(__dirname, 'src/js');

module.exports = {
    devtool: 'eval-source-map',
    entry: APP_DIR + '/index.js',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
        publicPath: '/static/'
    },
    module : {
        loaders : [
          {
            test : /\.js?/,
            include : APP_DIR,
            exclude: /node_modules/,
            loader : 'babel'
          }
        ]
    }
};
