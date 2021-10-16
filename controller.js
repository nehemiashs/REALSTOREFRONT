const { request, response } = require('express');
const nodeMailer = require('nodemailer');


const nodemailerSendGrid = require('nodemailer-sendgrid');

const envioCorreo = (req = request, resp = response) =>{
  let body = req.body;


 /*  let config = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    auth:{
      user:'nehemiashuaman360@gmail.com',
      pass:'70556078H'
    }
  }) */
 /*  var config = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4a5fd5025153fa",
      pass: "f53f2422fa8be2"
    }
  }); */

  var config = nodeMailer.createTransport(
    nodemailerSendGrid({
      apiKey: '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'
    })
  );

  const HtmlTemplate = `<td align="center" class="esd-block-banner" style="position: relative;" esdev-config="h1"><a target="_blank">
  <img class="adapt-img esdev-stretch-width esdev-banner-rendered" src="https://demo.stripocdn.email/content/guids/bannerImgGuid/images/image16340952432061411.png" alt title width="100%">
</a></td>`;
  const opciones = {
    from:'Programacion <zofyejeltu@yevme.com>',
    to:body.email,
    subject:body.asunto,
    html: HtmlTemplate/*  body.nombre +' '+ body.mensaje */ ,
    attachments:[{
      filename: 'license.txt',
      path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
    }]
  };

  config.sendMail(opciones,function(error,result){

    if(error) return resp.json({ok:false, msg:error});

    return resp.json({
      ok:true,
      msg:result
    })
  })

}

module.exports = {
  envioCorreo
}
