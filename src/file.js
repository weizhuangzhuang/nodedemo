const fs = require('fs')

//创建文件
// fs.writeFile('name.txt','天气不错123', (err) => {
//     console.log(err)
// })
//写入文件
//在文件后面拼接
// fs.appendFile('name.txt','壮壮喜欢小笛', (err) => {
//     console.log(err)
// })
//读取文件
// fs.readFile('name.txt', (err,msg) => {
//     console.log(err)
//     //默认读取二进制数据流 buffer
//     console.log(msg.toString('utf8'))
// })
//删除文件
fs.unlink('name.txt' , (err) => {
    console.log(err)
})