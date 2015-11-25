var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('run', function () {
	gulp.src('public')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('default', ['run']);