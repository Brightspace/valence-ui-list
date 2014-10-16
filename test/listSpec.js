( function() {
	'use strict';

	var createVUIElement = function( tag, className ) {
		var vuif = document.createElement( tag );
		vuif.className = className;
		return vuif;
	};

	var container;

	beforeEach( function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="13px";
		document.body.style.lineHeight="20px";

		container = document.createElement("div");
		container.style.width="1000px";
		document.body.appendChild(container);

		jasmine.addMatchers(d2l.jasmine.matchers);

	} );

	describe( 'vui-list', function() {
		var ul;
		var top_li;
		var bottom_li;

		beforeEach( function() {
			ul = document.createElement("ul");
			ul.className = "vui-list";
			container.appendChild(ul);
		})

		it( 'has expected class styles', function() {
			expect( ul ).toHaveClassStyles( {} );
		});

	} );

} )();