'use strict'

const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const nodeExternals = require('webpack-node-externals')
const webpackConfig = merge(baseWebpackConfig, {
  devtool: 'inline-cheap-module-source-map',
  externals: [nodeExternals()],
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
