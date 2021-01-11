#!/usr/bin/env node

const { program } = require('commander')

program
    .version('0.1.0')  // --version 版本
    .command('init <name> [branch]') // 初始化命令
    .description('初始化项目文件')
    .action( (name,branch) => { // 得到name 
        console.log('Hello World') // 进行输出
    })

program.parse(process.argv) // 解析变量



