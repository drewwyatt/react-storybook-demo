var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: APP_DIR + '/index.html'
		}),
    ]
};

module.exports = config;