/**
 * Step_0 讲解webpack最基础的使用
 * 1. webpack.config.js是webpack识别的默认文件名称，全局安装webpack之后，。。。
 * 
 * 1. 全局安装webpack，npm i -g webpack
 * 2. 基础配置，入口文件，目标文件。
 */
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:path.resolve('./src/js/main.js'),
    output:{
        path:path.resolve('dist'),//进入./dist/son目中下创建bundle.js
        filename:'bundle.js', //另：path尽量用__dirname拼接，__dirname 指的是当前目录在机器上的绝对路径。 如果用相对路径，那命令不在当前执行的时候，就会有问题。
     },
     plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}