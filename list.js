( function( $ ) {

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

} )( window.jQuery );