/**
 * 使用插件，把css单独打包出来
 */

/**
 * 关于resolve配置的作用
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require();
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
        root: __dirname + ':/github/flux-example/src', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
}