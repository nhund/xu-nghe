'use strict'

// var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname,'public');
var APP_DIR = path.resolve(__dirname,'src');
var VIEW = path.resolve(__dirname,'view');


var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
	watch: true,
    module:{
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets:['es2015','es2017','react','stage-0']
                }
            }
        ]
    }
}

module.exports = config;