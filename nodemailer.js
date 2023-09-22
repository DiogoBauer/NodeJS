var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ddavibauer@gmail.com',
    pass: 'sejq uzvj ttax nhbq'
  }
});

var mailOptions = {
  from: 'ddavibauer@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js',
  text: 'Diogo Davi Bauer, 2B, sejq uzvj ttax nhbq'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 