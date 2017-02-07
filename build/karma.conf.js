/**
 * karma.conf
 *
 * @author:   波比(｡･∀･)ﾉﾞ
 * @date:     2016-10-22  上午11:31
 */

var webpackConf = require('./webpack.config');
delete webpackConf.entry;

module.exports = function (config) {

	config.set({
		// this is the entry file for all our tests.
		files: [
			'./test/unit/index.js'
		],

		// Chrome ,PhantomJS
		browsers: ['Chrome'],

		frameworks: ['jasmine'],

		// coverage reporter generates the coverage
		reporters: ['progress'],

		// enable / disable colors in the output (reporters and logs)
		colors: true,



		// we will pass the entry file to webpack for bundling.
		preprocessors: {
			'./test/unit/index.js': ['webpack']
		},


		webpack: webpackConf,


		webpackMiddleware: {
			noInfo: true
		},
		// optionally, configure the reportercd
		coverageReporter: {
			type : 'html',
			dir : 'coverage/'
		}

	})
}
