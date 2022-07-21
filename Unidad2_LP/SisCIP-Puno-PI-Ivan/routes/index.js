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

router.get('/habilitacionesCIP', function(req, res, next) {
  res.render('habilitaciones/ch-reporte');
});

router.get('/servicioscip', function(req, res, next) {
  res.render('tramites/tr');
});

router.get('/habilitacionesCIP-Pagos', function(req, res, next) {
  res.render('habilitaciones/ch-pago');
});


router.get('/Pagos-Membresía', function(req, res, next) {
  res.render('membresia/pagos');
});

router.post('/main', function(req, res, next) {
  email=req.body.email;
  password=req.body.password;
  console.log(email);
  dbConn.query("SELECT * FROM users WHERE User_Usuario='"+email+"' AND User_pasword='"+password+"'",function(err,rows){
    if(err){
      req.flash('error',err);
      console.log(err);
    }else{
      if(rows.length){
        console.log(rows);
        req.session.idu=rows[0]["User_ID"];
        req.session.email=rows[0]["User_Usuario"];
        req.session.loggedin = true;
        res.redirect('/dashboardCIP');
      }else{
        req.flash('error','El usuario no existe...');
        res.redirect('/');
      }
    }
  });

  
});

router.get('/dashboardCIP', function(req, res, next) {
 // if(!req.session.loggedin){
    //res.redirect('/');
   //}else{

  res.render('main');//S}
});
router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect("/");
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
