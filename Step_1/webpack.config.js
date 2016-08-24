/**
 * 开始讲Loader
 * 1. 安装最基本的css-loader: npm install --save-dev css-loader style-loader。
 * 2. 按下面的配置写。
 * 3. main.js中的require('style.css')会被加载到js文件中，然后执行webpack。
 * 4. 想用less-loader： npm install --save-dev less-loader less
 * 5. 如下配置。
 */
module.exports = {
    entry:__dirname + '/main.js',//这个地方记得不能是'./main.js'
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'},
            {test:/\.less$/,loader:'style!css!less'},
        ]
    }
}
