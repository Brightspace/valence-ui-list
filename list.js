/*jslint browser: true*/

( function( vui ) {

	// Check if the provided vui global is defined, otherwise try to require it if
	// we're in a CommonJS environment; otherwise we'll just fail out
	if( vui === undefined ) {
		if( typeof require === 'function' ) {
			vui = require('../../core');
		} else {
			throw new Error('load vui first');
		}
	}

	// Export the vui object if we're in a CommonJS environment.
	// It will already be on the window otherwise
	if( typeof module === 'object' && typeof module.exports === 'object' ) {
		module.exports = vui;
	}

	var $ = vui.$;

	$.widget( 'vui.vui_list', {

		_create: function() {

			var $node = $( this.element );

			var updateListSelection = function() {

				$node.find( 'li.vui-checkbox > label > input, li.vui-radio > label > input' ).each(
					function ( index, inputNode ) {

						var $input = $( inputNode );

						$input.closest( 'li.vui-checkbox, li.vui-radio' ).toggleClass(
							'vui-selected', $input.prop( 'checked' )
						);

					}
				);

			};

			updateListSelection();

			$node.change( function( args ) {

				var $target = $( args.target );

				if ( $target.attr( 'type' ) === 'checkbox' ) {

					$target.closest( 'li.vui-checkbox' ).toggleClass(
						'vui-selected', $target.prop( 'checked' )
					);

				} else if ( $target.attr( 'type' ) === 'radio' ) {

					updateListSelection();

				}

			} );

		}

	} );

	vui.addClassInitializer(
			'vui-list',
			function( node ) {
				$( node ).vui_list();
			}
		);

} )( window.vui );