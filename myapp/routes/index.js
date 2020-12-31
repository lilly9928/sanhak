var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//iso9001
router.get('/iso9001_sum', function(req, res, next) {
  res.render('./iso9001/summary', { title: '에이원경영' });
});
router.get('/iso9001_step', function(req, res, next) {
  res.render('./iso9001/step', { title: '에이원경영' });
});
router.get('/iso9001_ben', function(req, res, next) {
  res.render('./iso9001/benefit', { title: '에이원경영' });
});

//iso14001
router.get('/iso14001_sum', function(req, res, next) {
  res.render('./iso14001/summary', { title: '에이원경영' });
});
router.get('/iso14001_step', function(req, res, next) {
  res.render('./iso14001/step', { title: '에이원경영' });
});
router.get('/iso14001_ben', function(req, res, next) {
  res.render('./iso14001/benefit', { title: '에이원경영' });
});

//laboratory
router.get('/laboratory_sum', function(req, res, next) {
  res.render('./laboratory/summary', { title: '에이원경영' });
});
router.get('/laboratory_step', function(req, res, next) {
  res.render('./laboratory/step', { title: '에이원경영' });
});
router.get('/laboratory_ben', function(req, res, next) {
  res.render('./laboratory/benefit', { title: '에이원경영' });
});

//product
router.get('/product_sum', function(req, res, next) {
  res.render('./product/summary', { title: '에이원경영' });
});
router.get('/product_ben', function(req, res, next) {
  res.render('./product/benefit', { title: '에이원경영' });
});

//enterpraise
router.get('/enterpraise_sum', function(req, res, next) {
  res.render('./enterpraise/summary', { title: '에이원경영' });
});
router.get('/enterpraise_ben', function(req, res, next) {
  res.render('./enterpraise/benefit', { title: '에이원경영' });
});

module.exports = router;
