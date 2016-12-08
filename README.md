# vue-aui

> Vue.js 2 wrapper over Atlassian User Interface (AUI)

[![npm version](https://badge.fury.io/js/vue-aui.svg)](https://badge.fury.io/js/vue-aui)

## Usage

### Requirements

* NPM 3.10.8+
* AUI 6.0.3+ - you need to make attach this yourself to the page

### Installation

```
npm install vue-aui --save
```

### Examples
https://spartez.github.io/vue-aui/

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
