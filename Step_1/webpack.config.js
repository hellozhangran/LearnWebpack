/**
 * 开始讲Loader
 * 1. 安装最基本的css-loader: npm install --save-dev css-loader style-loader
 * 2. 按下面的配置写，然后执行webpack
 * 
 */
module.exports = {
    entry:__dirname + '/main.js',//这个地方记得不能是'./mian.js'
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