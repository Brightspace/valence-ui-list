var del = require('del'),
	gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	vui = require('vui-helpers'),
	tester = require('vui-karma-jasmine-tester');

gulp.task( 'clean', function( cb ) {
	del([ 'list.css' ], ['test/output'], cb);
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

gulp.task( 'test', function( ) {
	return tester.test( {
		files: [
			'test/**/*Spec.js',
			'list.css'
		]
	});
});

gulp.task( 'ergen', function() {
	return tester.test( {
		files: [
			'test/**/*Spec.js',
			'list.css'
		]
	}, true );
});

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css', 'js' );
} );
