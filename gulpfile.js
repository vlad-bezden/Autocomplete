var gulp = require('gulp'),
	webserver = require('gulp-webserver');

gulp.task('build', function () {
	gulp.src('public')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});

gulp.task('default', ['build']);