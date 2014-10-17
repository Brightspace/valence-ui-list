#VUI List
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]

This library contains a series of LESS mixins and CSS which can be used to
style lists.

##Usage

Install as a development dependency:

```shell
npm install --save-dev vui-list
```

##LESS Mixins

Import the library into your LESS file:

```css
@import 'node_modules/vui-list/list'
```

To apply list styling, call the `#vui.list` mixin within your list's CSS
selector:

```css
ul {
  #vui.list();
}
```

Lists can be rendered without separators between the items by passing the
`hasSeparators` parameter as `false`:

```css
ul {
  #vui.list( @hasSeparators: false );
}
```

To render lists with less padding inside the items, pass the `isCompact`
parameter as `true`:

```css
ul {
  #vui.list( @isCompact: true );
}
```

###Item States

List items can be in two different states (or a combination of both states),
and we expose different mixins for each state:
- **selected**: this state is reserved for lists that support selection of
items, either with checkboxes or radio buttons
- **active**: clickable or selectable items are typically put into this state
when the user's mouse hovers over them, or when they receive keyboard focus

Use the `list-item-selected` and `list-item-active` mixins to apply states to
items. For items which are both selected and active, use the
`list-item-selected-active` mixin.

Sample LESS:
```css
@import 'node_modules/vui-list/list-item'

li:hover, li:focus {
    #vui.list-item-active();
}

li.selected {
    #vui.list-item-selected();
    &:hover, &:focus {
        #vui.list-item-selected-active();
    }
}
```

##CSS

If you'd prefer to use CSS, bundle up the provided `list.css` file with
your application's CSS. Then apply the `vui-list` CSS class to your
list elements.

```css
<ul class="vui-list">
  <li>item 1</li>
</ul>
```

Similar to the LESS mixin, you can disable the separators between list items
by adding the `vui-list-no-separator` class:

```css
<ul class="vui-list vui-list-no-separator"></ul>
```

And reduce padding inside the items by making your list compact:
```css
<ul class="vui-list vui-list-compact"></ul>
```

Item `selected` and `active` states can be applied using the
`vui-list-item-selected`, `vui-list-item-active` and
`vui-list-item-selected-active` classes.

##Building

After grabbing the source, [Gulp](http://gulpjs.com/) should be installed
globally using the `npm install -g gulp` command. Then install package
dependencies:

```shell
npm install
```

To build, run:

```shell
gulp
```

To test using Karma:

```shell
npm test
```

## Contributing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules
and contributions should make use of them. See the valence-ui [Code Style wiki
page](https://github.com/Desire2Learn-Valence/valence-ui-helpers/wiki/Code-Style)
for details.

[npm-url]: https://npmjs.org/package/vui-list
[npm-image]: https://badge.fury.io/js/vui-list.png
[ci-image]: https://travis-ci.org/Desire2Learn-Valence/valence-ui-list.svg?branch=master
[ci-url]: https://travis-ci.org/Desire2Learn-Valence/valence-ui-list
