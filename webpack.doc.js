module.exports =  {
	entry: "./src/index.js",
	output: {
		path: "./dist",
		filename: "index.js",
		library : '7UI'
	},
	resolve:{
		extensions: ['', '.js', '.vue']
	},
	module: {
		loaders: [
			{test: /\.html/, exclude : /node_modules/, loader: 'html'},
			{test: /\.scss$/, exclude : /node_modules/, loader: "style!css!sass" }
		]
	}
};