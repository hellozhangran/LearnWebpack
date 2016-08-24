/**
 * 使用插件，把css单独打包出来
 */

/**
 * 关于resolve配置的作用
 */
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:__dirname + '/main.js',
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.less$/,loader:ExtractTextPlugin.extract('style','css!less')}
        ]
    },
    plugins:[
        new ExtractTextPlugin("./css/[name].css")
    ],
    resolve: {
        //查找module的话从这里开始查找
        root:path.resolve(__dirname,'./module/'),
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            //别名，这样在main.js里直接require('zhangran')即可。
            zhangran : path.resolve(__dirname,'./module/module-test.js'),
        }
    }
}
