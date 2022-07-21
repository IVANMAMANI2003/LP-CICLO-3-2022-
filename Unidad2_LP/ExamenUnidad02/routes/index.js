var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/registro-colegiatura-datos-personales', function(req, res, next) {
  res.render('partails/colegiatura');
});

router.get('/tramite-documentario', function(req, res, next) {
  res.render('partails/tramites');
});

router.get('/tramite-ducumentario', function(req, res, next) {
  res.render('partails/Tramites');
});
router.get('/registro-colegiatura-formacion-academica', function(req, res, next) {
  res.render('registros/regis1');
});

router.get('/registro-colegiatura-experiencia-profesional', function(req, res, next) {
  res.render('registros/regis2');
});

module.exports = router;
