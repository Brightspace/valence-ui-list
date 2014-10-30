( function() {
	'use strict';

	var container;

	beforeEach( function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="13px";
		document.body.style.lineHeight="20px";

		container = document.createElement("div");
		container.style.width="1000px";
		document.body.appendChild(container);

		jasmine.addMatchers(d2l.vui.matchers.jasmine);

	} );

	describe( 'ul', function() {

		var ul;

		var testListStyles = function( ) {

			it( 'has expected class styles', function() {
				var diff = d2l.vui.differs.diffDefaultStyle( ul );
				expect( diff ).toMatchRecordedObjectAt( d2l.vui.records.getElementRecordPath( ul ) );
			});

			describe( 'li', function() {

				var top_li;
				var bottom_li;

				var testItemStyles = function( ) {
					it( 'has expected class styles on top node', function() {
						var diff = d2l.vui.differs.diffDefaultStyle( top_li );
						expect( diff ).toMatchRecordedObjectAt(
							d2l.vui.records.getElementRecordPath( ul )
								.concat(d2l.vui.records.getElementRecordPath( top_li, ['previousElementSibling'] ))
						);
					});

					it( 'has expected class styles on top node', function() {
						var diff = d2l.vui.differs.diffDefaultStyle( bottom_li );
						expect( diff ).toMatchRecordedObjectAt(
							d2l.vui.records.getElementRecordPath( ul )
								.concat( d2l.vui.records.getElementRecordPath( bottom_li, ['nextElementSibling'] ))
						);
					});
				};


				beforeEach( function() {
					top_li = document.createElement("li");
					bottom_li = document.createElement("li");

					ul.appendChild(top_li);
					ul.appendChild(bottom_li);
				});


				describe( 'unclassed item', function() {
					testItemStyles();
				});

				describe( 'with vui-selected', function() {
					beforeEach(function() {
						top_li.className = "vui-selected";
						bottom_li.className = "vui-selected";
					});
					testItemStyles();
				});

				describe( 'with vui-active', function() {
					beforeEach(function() {
						top_li.className = "vui-active";
						bottom_li.className = "vui-active";
					});
					testItemStyles( );
				});

				describe( 'with vui-selected vui-active', function() {
					beforeEach(function() {
						top_li.className = "vui-selected vui-active";
						bottom_li.className = "vui-selected vui-active";
					});
					testItemStyles( );
				});

			});
		};

		describe( 'with vui-list', function() {
			beforeEach( function() {
				ul = document.createElement("ul");
				ul.className = "vui-list";
				container.appendChild(ul);
			});

			testListStyles( );

			describe( 'and vui-compact', function() {
				beforeEach( function() {
					ul.className = ul.className + " vui-compact";
				});

				testListStyles( );

			});

			describe( 'and vui-compact', function() {
				beforeEach( function() {
					ul.className = ul.className + " vui-no-separator";
				});

				testListStyles( );
			});

			describe( 'and vui-compact and vui-no-separator', function() {
				beforeEach( function() {
					ul.className = ul.className + " vui-no-separator vui-compact";
				});

				testListStyles( );
			});

		});

	} );

} )();
