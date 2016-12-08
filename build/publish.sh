#!/bin/bash

npm run build
git commit -am "Updating dist to version v$(npm show vue-aui version)"
git push origin master
npm publish
