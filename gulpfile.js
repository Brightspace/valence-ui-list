var del = require('del'),
	gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	vui = require('vui-helpers');

gulp.task( 'clean', function( cb ) {
	del([ 'list.css' ], cb);
} );

gulp.task( 'css', function () {
	return vui.makeCss(
		'list.css.less',
		'list.css',
		{ 'lintOpts' : '.csslintrc' }
	);
} );

gulp.task( 'js', function() {
	return gulp.src( ['gulpfile.js', 'test/*.js'] )
		.pipe( jshint() )
		.pipe( jshint.reporter('default') );
} );

gulp.task( 'test', function () {
	return vui.test( {
		files: [
			'test/**/*Spec.js',
			'list.css'
		]
	} ) ;
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'js' );
} );
