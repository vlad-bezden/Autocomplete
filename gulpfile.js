var gulp = require('gulp'),
	superstatic = require('superstatic');
	
gulp.task('serve', function () {
	var server = superstatic.server;
	var app = server({
		clean_urls: true,
		cwd: './app',
		port: 8080,
		debug: true
	});
	
	app.listen(function () {
		console.log('Server is running on port 8080');
	});
});