var gulp = require('gulp');
var shell = require('gulp-shell');

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
gulp.task('build',
	shell.task(['npm run build'])
);

// build css file
gulp.task('buildcss',
	shell.task(['npm run buildcss'])
);




gulp.task('document', ['configfile', 'markdown', 'doc', 'doccss'])

gulp.task('build', ['configfile', 'build', 'doc'])