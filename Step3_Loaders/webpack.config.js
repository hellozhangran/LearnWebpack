/**
 * loader的使用，下面以ts-loader为例，恰好这个比较麻烦，只加ts-loader是没法将typescrit转成js的
 * 1. npm install --save-dev typescript
 * 2. npm install --save-dev ts-loader
 * 3. webpack.config.js同目录下创建tsconfig.js
 * 4. webpack.config.js 中添加 ts-loader
 * 5. resolve添加.ts后缀
 */

var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:path.resolve(__dirname + '/src/index.js'), 
    resolve:{
        extensions:['.js','.ts']
    },
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.ts$/,use:'ts-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}
