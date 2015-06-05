(function() {
	'use strict';

	describe('vui-list', function() {

		beforeEach(function () {
			jasmine.addMatchers(vui.jasmine.dom.matchers);
		});

		describe('selectors', function() {

			it('defines a ".vui-list" selector', function() {
				expect(document).toHaveCssSelector('.vui-list');
			});

			it('defines a ".vui-list.vui-compact > li" selector', function() {
				expect(document).toHaveCssSelector('.vui-list.vui-compact > li');
			});

			it('defines a ".vui-list.vui-no-separator > li" selector', function() {
				expect(document).toHaveCssSelector('.vui-list.vui-no-separator > li');
			});

		});

	});

})();
