
function hellofunction(x) {
	return x*200;
}

function helloworldfunction(x) {
	return "Hello World "+x;
}

function mailSend() {
var express = require('express');
var app = express();
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var mailer = require('express-mailer');

	// Mail Configuration
mailer.extend(app, {
  from: 'Red Ragoon <dev@redragoon.com>',
  host: 'smtp.gmail.com', // hostname 
  secureConnection: true, // use SSL 
  port: 465, // port for secure SMTP 
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts 
  auth: {
    user: 'dipankar.cantripsolutions@gmail.com',
    pass: 'ipqinzitvgltfbvr'
  }
});

	app.mailer.send('mailTemplate/demoMail', {
	  	to: 'deep.dashng@gmail.com',
	  	subject: 'Test Mail'
	  }, function(err){
	  	if (err) {
	  		console.log(err);
	  		return;
	  	} else{
	  		console.log('Mail Send');
	  	}
  	});
}

module.exports = {
		hellofunction: hellofunction,
		helloworldfunction: helloworldfunction,
		mailSend: mailSend
	};