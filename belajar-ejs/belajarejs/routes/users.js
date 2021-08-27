var express = require('express');
var router = express.Router();


// let datausers 

let datausers = [
  {
    'id': 1,
    'username': 'ricky',
    'password': 'admin',
    'token': 'token1'
  },
  {
    'id': 2,
    'username': 'daffa',
    'password': 'admin',
    'token' : 'token2'
  }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
   res.status(200).json({
     'status' : 200,
     'message': 'Berhasil Get Data Users',
     'data' : datausers
   })
});


router.get('/:id', function(req, res, next) {
  res.send('respond with a resource coba');
});

router.post('/login', function(req, res, next) {
    // ngecek username sama password
    console.log(req)
    datausers.map((item, index) => {
        // jika username dan password sama, kirim token
        if(item.username === req.body.username && item.password === req.body.password) {
          res.json({
            "message" : "login berhasil",
            "token": item.token
          })
          // redirect suits
          // res.redirect('/suits?isLogin=true')
        }
    })

    res.json({
      "message" : "username atau password salah",
    })
})


module.exports = router;
