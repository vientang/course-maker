// Allow for console.log because this file is for production
/* eslint-disable no-console */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const GLOBALS = {
	"process.env.NODE_ENV": JSON.stringify("production")
};

module.exports = {
	debug: true,
	devtool: 'source-map',
	noInfo: false,
	entry: ['./src/index'],
	target: 'web',
	output: {
		path: __dirname + '/dist', // physical files are only output by npm run build 
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		// optimize the order our files are bundled in for optimal minification
		new webpack.optimize.OccurenceOrderPlugin(),
		// lets us define variables that are made availabe to the libraries that Webpack is bundling
		new webpack.DefinePlugin(GLOBALS),
		// extract css into a separate file
		new ExtractTextPlugin('styles.css'),
		// eliminates duplicate packages in our final bundle
		new webpack.optimize.DedupePlugin(),
		// minifies our javascript
		new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
			{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      {test: /\.png$/, loader: "url-loader?mimetype=image/png" }
		]
	}
};