var express = require('express');
var router = express.Router();
var globals = require('./../globals');
var glob = require('./../all_functions');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('globalFunction', { title: 'Express', glob: globals });
});

router.get('/function', function(req, res, next) {
  // res.render('globalFunction', { title: 'Express', glob: globals });
  // var printhellofunction = glob.hellofunction(10);
  // var helloworldfunction = glob.helloworldfunction('John');
  // console.log(printhellofunction);
  // console.log(helloworldfunction);
  // console.log(globals.domain);
  var mailsend = glob.mailSend();
  // res.mailer.send('mailTemplate/demoMail', {
	 //  	to: 'deep.dashng@gmail.com',
	 //  	subject: 'Test Mail'
	 //  }, function(err){
	 //  	if (err) {
	 //  		console.log(err);
	 //  		return;
	 //  	}
  // });

});


module.exports = router;
