var path = require('path');

module.exports =  {
	entry: "./src/index.js",
	output: {
		path: "./dist",
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel'
			}
		]
	}
};
