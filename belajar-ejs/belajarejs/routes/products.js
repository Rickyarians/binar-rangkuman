var express = require('express');
var router = express.Router();

/* GET users listing. */
// localhost:3000/products
router.get('/', function(req, res, next) {
  // res.send('ini adalah route products');
  let ricky = [
    {"id": 1, "name": "Kaos Hitam", "harga": 10000},
    {"id": 2, "name": "Kaos Hitam belang", "harga": 15000},
    {"id": 2, "name": "Kaos Hitam belang", "harga": 68000},
    {"id": 2, "name": "Kaos Hitam belang", "harga": 53000},
    {"id": 2, "name": "Kaos Hitam belang", "harga": 24000},
  ]
  res.render('products', { title: 'Express ganti', ricky })
});

// router.get('/coba', function(req, res, next) {
//   res.send('respond with a resource coba');
// });


module.exports = router;


