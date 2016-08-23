/**
 * Step_0 基础实例
 * 1. 全局安装webpack，npm i -g webpack
 * 2. 基础配置，入口文件，目标文件。
 */
var path = require('path');
module.exports = {
    entry:path.resolve('./main.js'),
    // output:{
    //     path:'./dist',//filename根据path来判断自己的位置和名称。 
    //     filename:'../bundle.js'//当前目录下创建了一个dist文件夹，但是却把bundle.js创建到了dist外层。
    // }
    
     output:{
         path:path.resolve('dist','son'),//进入./dist/son目中下创建bundle.js
         filename:'bundle.js', //另：path尽量用__dirname拼接，__dirname 指的是当前目录在机器上的绝对路径。 如果用相对路径，那命令不在当前执行的时候，就会有问题。
     }
}