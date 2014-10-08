( function() {
	'use strict';

	var createVUIElement = function( tag, className ) {
		var vuif = document.createElement( tag );
		vuif.className = className;
		return vuif;
	};

	var verifyListStyles = function( elemConstructor ) {
		var container;
		var elem;

		beforeEach( function () {
			container = document.createElement("div");
			document.body.appendChild(container);
			jasmine.addMatchers(d2l.jasmine.matchers);
			elem = elemConstructor(container);
		});

		afterEach( function() {
			document.body.removeChild(container);
		} );
	};

	beforeEach( function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="13px";
		document.body.style.lineHeight="20px";
	} );

	describe( 'vui-list', function() {
		it( 'is super', function() {
			expect( true ).toBeTruthy();
		});
	} );

} )();