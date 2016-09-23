var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    debug: true,
    entry: {
		'vendor': [
            'react'
		],
		'app': [
			APP_DIR + '/index.tsx'
		]
	},
    output: {
		path: BUILD_DIR,
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel?presets[]=es2015',
                    'ts-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
        new HtmlWebpackPlugin({
			template: APP_DIR + '/index.html'
		}),
    ],
    resolve: {
		extensions: ['', '.ts', '.tsx', '.js', '.json', '.css', '.png', '.jpg']
	},
    devServer: {
		contentBase: '',
		compress: true,
		quiet: true,
		historyApiFallback: true,
		host: "0.0.0.0",
		hot: true,
		inline: true,
		port: 3000,
		watchOptions: {
			aggregateTimeout: 300,
			poll: 1000
		}
    }
};

module.exports = config;