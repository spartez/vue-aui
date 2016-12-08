#!/bin/bash

NEW_VERSION=$(npm version $1)
npm run build
git commit -am "Updating dist to version $NEW_VERSION"
git push origin master --tags
npm publish
