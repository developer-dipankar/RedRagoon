var express = require('express');
var app = express();
var path = require('path');
var mailer = require('express-mailer');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

function hellofunction(x) {
	return x*200;
}

function helloworldfunction(x) {
	return "Hello World "+x;
}

function mailSend() {

	// Mail Configuration
mailer.extend(app, {
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
  		from: 'RedRagoon <deep.dashng9@outlook.com>',
	  	to: 'deep.dashng@gmail.com, sumita.cantripsolutions@gmail.com',
  		replyTo: 'developer.dipankar@gmail.com',
	  	subject: 'Test Mail from Node JS'
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