const fs = require('fs')

// fs.readdir('D:\application', (err , dirs) => {
//     console.log(err)
//     console.log(dirs)
//     for (let index = 0; index < dirs.length; index++) {
//         const element = dirs[index];
//         console.log(element)
//     }
// })

fs.stat('./dirtree.js', (err, stats) => {
    if (stats.isFile()) {
        console.log('is File')
    } else {
        console.log('is dir')
    }

})