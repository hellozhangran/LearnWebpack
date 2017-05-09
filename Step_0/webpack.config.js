/**
 * Step_0 讲解webpack最基础的使用
 * 1. webpack.config.js是webpack识别的默认文件名称，全局安装webpack之后，直接在webpack.config.js所在目录执行webpack即可。
 * 2. webpack2中自带es6 module加载模块，不需要用babel-loader既可以用import-export方法引入文件。
 * 3. 如果用到压缩，那还得引入babel-loader，以及babel系列babel-core等，否则`let`等用法还是会出错。
 * 4. sourceMap的使用，添加`devtool:'source-map'`,同时还要在UglifyJsPlugin中配置`{sourceMap: true}`
 */

var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:path.resolve(__dirname,'src/js/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js', //另：path一定要用__dirname拼接，__dirname 指的是当前目录在机器上的绝对路径。 如果用相对路径，那命令不在当前执行的时候，就会有问题。
    },
    devtool: 'source-map',
    module:{
         //鉴于webpack2 原生支持import方式，没引入babel-loader
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true }),
        new HtmlWebpackPlugin({template: path.resolve(__dirname,'src/index.html')})
    ]
}