var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login',{ title: 'login' });
});

router.get('/inscripcion', function(req, res, next) {
  res.render('inscripcion');
});

router.get('/main', function(req, res, next) {
  res.render('main');
});


module.exports = router;
