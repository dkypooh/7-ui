var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
	entry : './src/style.js',
	output : {
		filename : 'style.js',
		path : './docs'
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
					descendent : '__',
					modifier : '--'
				}
			}),
			require('postcss-calc')(),
			require("postcss-import"),
			require("postcss-nested")(),
			require('postcss-css-variables')(),
			require("postcss-url")(),
			require("postcss-cssnext")({browsers: ["last 2 chrome versions"]}),
			require('postcss-utilities')()
		]
	},
	resolve :{
		modules : ['node_modules', 'src'],
		extensions: ['', '.js', '.css'],
		alias :{
			'7ui-var': path.join(__dirname, '../node_modules/ui-style/src/_var.css'),
			'7ui-grid': path.join(__dirname, '../node_modules/ui-style/src/grid.css'),
			'7ui-icon': path.join(__dirname, '../node_modules/ui-style/src/icon.css')
		}
	}
}
