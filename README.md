# vue-aui

> Vue.js 2 wrapper over Atlassian User Interface (AUI)

[![npm version](https://badge.fury.io/js/vue-aui.svg)](https://badge.fury.io/js/vue-aui)

## Usage

### Demo

https://github.com/spartez/vue-aui

### Requirements

* NPM 3.10.8+
* AUI 6.0.3+ - you need to make attach this yourself to the page

### Installation

```
npm install vue-aui --save
```

or alternatively

```html
<script src="path/to/dist/vue-aui.js"></script>
```
and finally install vuejs plugin using

```ecmascript
Vue.use(VueAui)
```
This will register all the components.

### Examples
In any .vue component just use
```html
<aui-select2-multi v-model="myModel">
  <aui-select2-option value="value1">Option 1</aui-select2-option>
  <aui-select2-option if="shouldShow" value="value2">Option 2</aui-select2-option>
</aui-select2-multi>
```

Full components reference: https://spartez.github.io/vue-aui/

CodePen demo starter: http://codepen.io/damienix/pen/woXRpP

### Versioning
This package is **NOT** considered as stable. 

Before 1.X release any minor version can break the API but patch version will not.
Therefore it's not recommended to use dashes but rather fixed versions or tildas as below:

```
  "vue-aui", "0.1.0",
  "vue-aui", "~0.1.0",
  "vue-aui", "^0.1.0", // NOT recommended - can break with minor release
```

## Publishing

1. `./build/publish.js patch` (use `minor` or `major` to use release those versions))

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License
[MIT](LICENSE.md)
