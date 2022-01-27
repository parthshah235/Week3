var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Service' });
});
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

module.exports = router;
