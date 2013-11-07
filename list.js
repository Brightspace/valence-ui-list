( function( $ ) {

	$.widget( 'vui.vui_list', {

		_create: function() {

			var $node = $( this.element );

			$node.find( 'li.vui-checkbox > label > input' ).each(
				function ( index, inputNode ) {
					
					var $input = $( inputNode );
					
					$input.closest( 'li.vui-checkbox' ).toggleClass(
						'vui-selected', $input.prop( 'checked' )
					);
					
				}
			);

			$node.change( function( args ) {

				var $target = $( args.target );

				$target.closest( 'li.vui-checkbox' ).toggleClass(
					'vui-selected', $target.prop( 'checked' ) 
				);

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