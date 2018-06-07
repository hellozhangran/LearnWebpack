var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry:path.resolve(__dirname,'index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js', 
        library:'Ran'
    },
    /**
     * 如果不想用jquery的npm模块，而只是把jquery的cdn链接写在html中，还想再js模块中通过require到jquery，就用externals
     * 下面配置中jQuery是全局能访问的对象，jquery是require时的关键字
     */
    externals:{
        'jquery':'jQuery'
    }
}