var express = require('express');
var router = express.Router();
var globals = require('./../globals');
var app = express();

var myLogger = function (req, res, next) {
  console.log('Call MiddleWare');
  next()
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', glob: globals });
});

app.use(myLogger);
/* GET home page. */
router.get('/middleware', function(req, res, myLogger) {
	myLogger;
  console.log('Under Function');
  // res.render('index', { title: 'Express', glob: globals });
});

module.exports = router;
