## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Publishing

### Preconditions
* logged into npm
* having access to vue-aui package in the npm repository

### Releasing new version
`npm run release` 

Don't be scared to run it. This will run **interactive release process** with [np](https://www.npmjs.com/package/np) package. 
It'll prevent you from publishing most of the common mistakes.

##### So what does this command do for me?
* Ensures clean git state
* Builds new library
* Builds new docs
* Updates the version in package.json
* Commits everything under the new version tag
* Publishes package to npm
* Pushes release commit and tag to Github
