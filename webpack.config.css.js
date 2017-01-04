var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var styleAlias = require('./style.config');

module.exports = {
	entry : './src/style.js',
	output : {
		filename : 'style.js',
		path : './dist'
	},
	module : {
		loaders : [
			{
				test : /\.css/,
				loader:  ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
	],
	postcss: function (webpack) {
		return [

			require('precss')(),
			require('postcss-bem')({
				separators : {
					descendent : '_',
					modifier : '-'
				}
			}),
			require('cssnano'),
			require('postcss-calc')(),
			require("postcss-import"),
			require("postcss-nested")(),
			require('postcss-css-variables')(),
			require("postcss-url")(),
			require("postcss-cssnext")({browsers: ["last 2 chrome versions"]}),
			require('postcss-utilities')(),

		]
	},
	resolve :{
		modules : ['node_modules', 'src'],
		extensions: ['', '.js', '.css'],
		alias : styleAlias
	}
}
