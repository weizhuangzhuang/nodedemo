const fs = require('fs')

fs.readdir('./' , (err,data) => {
    //当路径存在是err为null
    console.log(err)
    console.log(data)
})