# vue-aui

> Vue.js wrapper for Atlassian User Interface (AUI)

[![npm version](https://badge.fury.io/js/vue-aui.svg)](https://badge.fury.io/js/vue-aui)

### Demo and docs

https://spartez.github.io/vue-aui/

### Installation

##### Requirements

* Vue 2.5.2+
* NPM 5+
* AUI 6.0+ - you need to attach this yourself to the page

##### Using npm
```
npm install vue-aui --save
```

and finally install vuejs plugin using

```js
Vue.use(VueAui)
```

This will register all the components.

Alternatively, you can import and use a single component:

```html
<template>
  <aui-button>Click me</aui-button>
</template>

<script>
import { AuiButton } from 'vue-aui';

export default {
  components: { AuiButton }
  // ...
};
</script>
```

##### Or directly onto page

```html
<script src="path/to/dist/vue-aui.js"></script>
```

### CodePen demo starter:
http://codepen.io/damienix/pen/woXRpP
