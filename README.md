# vue-aui

> Vue.js 2 wrapper over Atlassian User Interface (AUI)

[![npm version](https://badge.fury.io/js/vue-aui.svg)](https://badge.fury.io/js/vue-aui)

### Demo and docs

https://spartez.github.io/vue-aui/

### Installation

##### Requirements

* NPM 5+
* AUI 6.0+ - you need to attach this yourself to the page

##### Using npm
```
npm install vue-aui --save
```

and finally install vuejs plugin using

```ecmascript
Vue.use(VueAui)
```
This will register all the components.

##### Or directly onto page

```html
<script src="path/to/dist/vue-aui.js"></script>
```

### Examples
In any .vue component just use
```html
<aui-select2-multi v-model="myModel">
  <aui-select2-option value="value1" text="Option 1"></aui-select2-option>
  <aui-select2-option v-if="shouldShow" value="value2" text="Option 2"></aui-select2-option>
</aui-select2-multi>
```

### Supported components

https://spartez.github.io/vue-aui/

### CodePen demo starter:
http://codepen.io/damienix/pen/woXRpP

## Publishing

1. `./build/publish.js patch` (use `minor` or `major` to use release those versions))

In pre 1.0 versions any minor version can be braking. Braking changes though will be listed on release notes page. Patches won't be braking.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## License
[MIT](LICENSE.md)
