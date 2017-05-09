/**
 * Step1主要讲解文件入口entry的使用
 * 2. 如果应用是多页面应用就需要entry是一个对象，分列出不同的入口文件。
 * 3. 如果多个入口文件都引用了相同的模块（常常是一些公用模块），此时可通过CommonsChunkPlugin插件把公用模块提取出来，减少重复引用。
 */
var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry:__dirname + '/main.js', //值是一字符串
    //entry:path.resolve(__dirname + '/src/*.js'), ❌ entry不能用通配符
    entry:{
        index:'./src/js/index.js',
        page:'./src/js/page.js'
    },
    output:{
        path:__dirname + '/dist',
        filename:'[name].bundle.js'//name:'index' 'page', 如果不是对象，那name默认为'main'
        //filename:'[name].[id].[hash].[chunkhash].bundle.js'
    },
    plugins: [
        //index page两个入口文件中都引用了相同模块
        new webpack.optimize.CommonsChunkPlugin({ 
            name: "commons",
            filename: "commons.js",
            chunks: ["index", "page"],//指定合并哪些文件中的相同模块
        }),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
