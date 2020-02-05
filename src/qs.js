const qs = require('querystring')

// let string = 'name=wzz&pwd=123123&sex=0'

// let obj = qs.parse(string , '&' , '=')

let obj = { name: 'wzz', pwd: '123123', sex: '0' }

let string = qs.stringify(obj , '#' , '-')

console.log(string)