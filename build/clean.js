'use strict'

const rm = require('rimraf')
const path = require('path')
const config = require('../config')

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
})
