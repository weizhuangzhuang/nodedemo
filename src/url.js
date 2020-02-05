const url = require('url')

let urlString = 'https:47.44.55.666:8080/wzz/game/lol?user=loler&pwd=123123#hahah'

let urlObj = url.parse(urlString)
console.log(urlObj)