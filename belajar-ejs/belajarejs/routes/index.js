var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/suit', function(req, res, next) {
  res.render('suit', { title: 'Express' });
});

module.exports = router;
