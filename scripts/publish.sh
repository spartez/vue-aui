#!/bin/bash

if [ -z $1 ]; then
  echo "Please specify the version. Use one of patch, minor or major."
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "There are uncommitted changes. Clean them up first";
  exit 1
fi

NEW_VERSION=$(npm version $1)
npm run build
git commit -am "Updating dist to version $NEW_VERSION" -- ./dist ./index.html
git push origin master --tags
npm publish
