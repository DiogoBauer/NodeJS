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
  to: 'miguelcs0405@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 