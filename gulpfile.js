var gulp = require('gulp');
var shell = require('gulp-shell');
var installPackage  =  require('./component.package.json');
// markdown copy file
gulp.task('configfile',
	shell.task(['npm run configfile'])
);

// markdown copy file
gulp.task('markdown',
	shell.task(['npm run markdown'])
);


// build doc js file
gulp.task('doc',
	shell.task(['npm run doc'])
);


// build doc css file
gulp.task('doccss',
	shell.task(['npm run doccss'])
);


// build js file
gulp.task('js',
	shell.task(['npm run build'])
);

// build css file
gulp.task('buildcss',
	shell.task(['npm run buildcss'])
);




gulp.task('document', ['configfile', 'markdown', 'doc', 'doccss'])

gulp.task('build', ['configfile', 'js', 'doccss']);

var parseInstall =  function(obj){
	var ret = [];
	for(var key in obj){
		ret.push(key)
	}

	return ret.join(' ')
}



gulp.task('install', shell.task([
	'cnpm install ' + parseInstall(installPackage['dependencies'])
]));