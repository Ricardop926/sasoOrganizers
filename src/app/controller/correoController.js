require('dotenv').config();
const {} = require('express');
const nodeMailer = require('nodemailer')

const envioCorreo = (req=request,resp=response)=>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    const opciones = {
        from:'',
        to:'sasoorganizers7@gmail.com',
        subject: body.subject,
        text:body.message
    };

    config.sendMail(opciones,function(error,result){

        if (error) return resp.json({ok:false, msg: error});
        return resp.json({
            ok:true,
            msg:result
        })
    })
}

module.exports ={
    envioCorreo
}
