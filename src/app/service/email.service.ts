import { Injectable } from '@angular/core';
declare var Email: any
@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor() { }
  send() {
    'use strict';
    const nodemailer = require('nodemailer');
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'mail.domain.com',            //mail server name
            port: 25,                           //TLS port is 587
            secure: false,                      // true for 465, false for other ports
            auth: {
                type: "login",
                user: 'user@example.com',       // real email user
                pass: 'secret'                  // email password
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            },
            ignoreTLS: false	    // if this is true and secure is false
                                        // then TLS is not used
                                        // even if the server supports STARTTLS extension
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Name" <user@example.com>',          // sender address, MUST match auth.user
            to: 'recipient@example.com',                // list of receivers, separate using comma
            subject: 'Here is the subject',             // Subject line
            text: 'This is the body in plain text',     // plain text body
            html: '<b>This is the HTML message</b>'     // html body
        });
    
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    





    Email.port = 993 
    // Email.send({
    //   Host : 'mail.ufatapago.com.br',
    //   Username : 'contato@ufatapago.com.br',
    //   Password : 'Senha@123',
    //   To : 'hilton@tcavalcanti.com.br',
    //   From : 'contato@ufatapago.com.br',
    //   Subject : 'xxxxx',
    //   Body : `
    //   <i>This is sent as a feedback from my resume page.<br><br> <b>~End of Message.~</b> `
    //   })
    Email.send({
      Host: 'mail.ufatapago.com.br',
      Username: 'mail.ufatapago.com.br',
      Password: 'Senha@123',
      To: 'hilton@tcavalcanti.com.br',
      port: 993 ,
      From: 'contato@ufatapago.com.br',
      Subject: 'Teste',
      Body: '<h1>Olá</h1>'
    }).then((v: any) => console.log('****foi!', v))
      .catch((error: any) => console.log('error', error))
  }
    
}
