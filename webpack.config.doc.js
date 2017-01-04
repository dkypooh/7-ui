var path = require('path');

module.exports = {
	entry: "./doc/entry.js",
	output: {
		path: "./dist",
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				test: /\.md$/,
				loader: 'vue-doc-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.html/,
				loader: 'html'
			},

			{ test: /\.json$/, loader: 'json' },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	vue: {
		loaders: {
			scss: "vue-style-loader!css-loader!sass"
		}
	},
	resolve :{
		extensions: ['', '.js', '.vue'],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
};