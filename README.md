# vue-aui

> Vue.js wrapper for Atlassian User Interface (AUI)

[![npm version](https://badge.fury.io/js/vue-aui.svg)](https://badge.fury.io/js/vue-aui)

This library provides a way to use Atlassian User Interface ([AUI](https://docs.atlassian.com/aui/latest/))
that is native to Vue.js. It's created to speed-up development of Jira add-ons, but can also be used 
with other Atlassian products like Confluence, Bamboo, Bitbucket etc. that use AUI.

If you develop Jira add-ons please also take a look at [vue-aui-jira-extras](https://github.com/spartez/vue-aui-jira-extras)
that provides Jira specific additions, some of them built on top this library.

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

and finally install the Vue plugin using

```js
Vue.use(VueAui)
```

This will register all the components.

Alternatively, you can import and use a single component:

```html
<template>
  <va-button>Click me</va-button>
</template>

<script>
import { VaButton } from 'vue-aui';

export default {
  components: { VaButton }
};
</script>
```

##### Or directly onto page

```html
<script src="path/to/dist/vue-aui.js"></script>
```

Use `VueAui.default` to install the plugin into vuejs, if you imported vue-aui using a script tag:

```html
Vue.use(VueAui.default);
```

### CodePen demo starter:
https://codepen.io/dskrodzki/pen/LeGBme
