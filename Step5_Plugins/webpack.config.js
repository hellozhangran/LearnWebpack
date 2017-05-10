/**
 * 1. HtmlWebpackPlugin
 */
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry:__dirname + '/main.js', //值是一字符串
    //entry:path.resolve(__dirname + '/src/*.js'), ❌ entry不能用通配符
    entry:{
        single:'./src/single.js',
        multiplay:'./src/multiplay.js'
    },
    output:{
        path:__dirname + '/dist',
        filename:'[name].dev.js'//name:'index' 'page', 如果不是对象，那name默认为'main'
        //filename:'[name].[id].[hash].[chunkhash].bundle.js'
    },
    plugins: [
        //index page两个入口文件中都引用了相同模块
        new webpack.optimize.CommonsChunkPlugin({ 
            name:'common',
            // filename: "common.js",
            // chunks: ["single", "multiplay"],//指定合并哪些文件中的相同模块 //默认是合并所有不同入口文件中引用相同的部分
        }),
        new HtmlWebpackPlugin({
            template: './src/single.html',
            filename: 'single.html',
            chunks: ['common','single']
        }),
        new HtmlWebpackPlugin({
            template: './src/multiplay.html',
            filename: 'multiplay.html',
            chunks: ['common','multiplay']

        })
    ]
}
