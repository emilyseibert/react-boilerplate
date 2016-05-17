var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/static');
var APP_DIR_JS = path.resolve(__dirname, 'src/js');
var APP_DIR_SCSS = path.resolve(__dirname, 'src/scss');


module.exports = {
    devtool: 'eval-source-map',
    entry: APP_DIR_JS + '/index.js',
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR_JS,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
};
