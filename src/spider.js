const http = require('https')
const fs = require('fs')
const cheer = require('cheerio')

let url = 'https://www.qunar.com/'

http.get(url, (res) => {
    console.log(res.headers)
    const { statusCode } = res;
    const contentType = res.headers['content-type']

    console.log(statusCode, contentType)

    let err = null;
    if (statusCode !== 200) {
        err = new Error('请求状态错误')
    } else if (!/^text\/html/.test(contentType)) {
        err = new Error('请求类型错误')
    }

    //err 为真两个判断出错
    if (err) {
        console.log(err)
        res.resume(); //重置缓存
        return false
    }

    //数据处理
    let rawData = ''
    res.on('data', (chunk) => {
        //console.log(chunk)
        console.log('-----')
        rawData += chunk.toString('utf8')

    })

    res.on('end', () => {
        console.log('数据传输完毕')
        fs.writeFile('./webdata.html', rawData, (err) => {
            console.log(err)
        })
        let $ = cheer.load(rawData)
        $('img').each((index, ele) => {
            console.log($(ele).attr('src'))
        })
    })
}).on('error', (err) => {
    console.log('请求错误')
})



//let obj = {name:123 , age:34}
//let name = obj.name
//let {name} = obj