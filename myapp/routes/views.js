var express = require('express');
var router = express.Router();

/* dashboard page. */
router.get('/', function(req, res, next) {
  res.render('main', { title: '에이원경영' });
});
module.exports = router;
