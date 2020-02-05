const nodemailer = require("nodemailer");

let sendMail = {
    mailTo(mailobj) {
        //创建发送邮件的对象
        let transporter = nodemailer.createTransport({
            host: "smtp.qq.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: '694678402@qq.com', // generated ethereal user
                pass: 'aahceqieaqrabdaj' // generated ethereal password
            }
        })

        // send mail with defined transport object


        transporter.sendMail(mailobj, (err, data) => {
            console.log(err)
            console.log(data)
        })

    }
}

module.exports = sendMail