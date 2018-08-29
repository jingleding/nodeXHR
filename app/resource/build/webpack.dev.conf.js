const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config/index')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const path = require('path')

module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    watch: true
})
