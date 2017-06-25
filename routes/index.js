var express = require('express');
var router = express.Router();
var globals = require('./../globals');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', glob: globals });
});

module.exports = router;
