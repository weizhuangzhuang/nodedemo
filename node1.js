//console.log(__dirname)

let Module = require('./mail')

let mailobj = {
    from: '"Fred Foo 👻" <694678402@qq.com>', // sender address
    to: "694678402@qq.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
}
Module.mailTo(mailobj)