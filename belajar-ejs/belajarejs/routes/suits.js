var express = require('express');
var router = express.Router();

/* GET home page. */
const midd = (err, req, res, next) => {
  console.log(req)
}
router.get('/', midd, function(req, res, next) {
  res.render('suit', { title: 'Express' });
});



module.exports = router;
