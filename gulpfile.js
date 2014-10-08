var gulp = require( 'gulp' ),
	vui = require( 'vui-helpers' );

gulp.task( 'clean', function() {
	return gulp.src( [ 'dist/**/*' ] )
		.pipe( vui.clean() );
} );

gulp.task( 'css', function () {
	return vui.makeCss( 
		'list.css.less',
		'list.css'
	);
} );

gulp.task( 'default', [ 'clean' ], function() {
	gulp.start( 'css' );
} );