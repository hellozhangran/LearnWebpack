/**
如何使用sourcemap来debug
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
