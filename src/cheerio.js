const cheer = require('cheerio')

let $ = cheer.load('<div><p>你好啊啊</p></div>')

console.log($('p').text())