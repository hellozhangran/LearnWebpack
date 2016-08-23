/**
 * 开始讲Loader
 * 1. 安装最基本的css-loader: npm install --save-dev css-loader style-loader
 * 2. 按下面的配置写，然后执行webpack
 * 3. main.js中的require('style.css')会被加载到js文件中。
 * 4. 如果我们想用less，而且是单独编译css文件，看webpack.config.less.js
 *
 */
module.exports = {
    entry:__dirname + '/main.js',//这个地方记得不能是'./main.js'
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.css$/,loader:'style!css'}
        ]
    }
}
