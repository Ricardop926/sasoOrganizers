const {} = require('express');
const nodeMailer = require('nodemailer')

const envioCorreo = (req=request,resp=response)=>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        auth:{
            user:'andresdev26@gmail.com',
            pass:'tkyv eaca guek xndk'
        }
    })
    const opciones = {
        from:'programacion',
        subject: body.subject,
        to:body.email,
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
