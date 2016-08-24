/**
 * 使用babel-loader
 npm install babel-loader babel-core babel-preset-es2015 --save-dev
 然后添加如下loaders中的配置，在main.js中就可以写es6了。
 */

 /**

 */
var path = require('path');
module.exports = {
    entry:__dirname + '/main.js',
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        loaders:[{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
