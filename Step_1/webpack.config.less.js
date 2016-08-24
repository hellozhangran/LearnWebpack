/**
 * 开始讲Loader
 * 1. npm install extract-text-webpack-plugin --save-dev
 * 2. 按下面的配置写，然后执行webpack
 * 3. main.js中的require('style.css')会被加载到js文件中。
 * 4. 如果我们想用less，而且是单独编译css文件，看webpack.config.less.js
 *
 */

var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:__dirname + '/main.js',//这个地方记得不能是'./main.js'
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.less$/,loader:ExtractTextPlugin.extract('style!css!less')}
        ]
    },
    plugins:[
        new ExtractTextPlugin("[name].css")
    ]

}
