const { render } = require('ejs');
const e = require('express');
var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/inscripcion', function(req, res, next) {
  res.render('inscripcion');
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/main', function(req, res, next) {
  let email= req.body.email;
  let password = req.body.password;
  console.log(email);
  dbConn.query("SELECT * FROM usuarios WHERE email='"+ email+"' AND password='"+password+"'",function(err,rows)     {
    if(err) {
        req.flash('error', err);
         
    }else {
        if (rows.length) {
          console.log(rows);
          req.session.idu=rows[0]["id"];
          req.session.email=rows[0]["email"];
          req.session.loggedin = true;
          res.redirect('/dashboard');
        }else{
          req.flash('error', 'El usuario no existe...');
          res.redirect('/login');
        }
    }
  });
});

router.get('/dashboard', function(req, res, next) {
  if (!req.session.loggedin) {
    res.redirect('/');
    
  } else {
    res.locals.email=req.session.email;
    var queries = [
      "SELECT COUNT(idx) as cantidad FROM clientes",
      "SELECT SUM(saldo) as total FROM clientes"
    ];
    
     //dbConn.query('SELECT SUM(saldo) as total FROM clientes',function(err,rows) {
     dbConn.query(queries.join(';'),function(err,rows) {
      //console.log(rows[0].total);
      if(err) throw err;
      //console.log(rows[0][0].cantidad);
      res.render('main',{dataCantidad:rows[0][0].cantidad,dataSaldo:rows[1][0].total});
     });
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

router.get('/cliente-list', function(req, res, next) {  
  dbConn.query('SELECT * FROM clientes',function(err,rows)     {
      if(err) {
          req.flash('error', err);
          res.render('clientes/list',{data:''});   
      }else {
          res.render('clientes/list',{data:rows});
      }
  });
});

router.get('/api', function(req, res, next) {
  //if(!req.session.idu){
    //res.render('login/index');
  //}else{
    dbConn.query('SELECT marca, COUNT(*) as cantidad FROM clientes GROUP BY marca',function(err,rows)     {
      if(err) {
          req.flash('error', err);  
          console.log(rows);
      } else {
        res.send(JSON.stringify(rows));
        //res.render('login/dashboard',{data:JSON.stringify(rows)});
      }
    });
  //}
});

module.exports = router;
