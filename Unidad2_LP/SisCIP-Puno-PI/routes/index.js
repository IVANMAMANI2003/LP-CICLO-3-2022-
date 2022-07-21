var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/clientes', function(req, res, next) {
  dbConn.query('SELECT sexo, COUNT(sexo) AS cantidad FROM tblUsuarios GROUP BY sexo;',function(err,rows)     {
      if(err) {
          req.flash('error', err);
          // render to views/books/index.ejs
          res.render('clientes/list',{data:''});   
          console.log(rows);
      } else {
          // render to views/books/index.ejs
          res.locals.idu=req.session.idu;
          res.locals.user=req.session.user;
          res.locals.email=req.session.email;

          res.render('clientes/list',{data:rows});
      }
  });
});

module.exports = router;
