// manggil module / depency
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// manggil module / file / local
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products'); // tambahin
var suitsRouter = require('./routes/suits'); // tambahin
const { nextTick } = require('process');
const e = require('express');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(function(req, res, next) {
 console.log(req)
 if(req.path === '/' || req.path == '/users/login' || req.path == '/login') {
   // route halaman publik
   next() // boleh lewat
 } else if (req.path === '/suits') {
   console.log(req.query.isLogin)
   if(req.query.isLogin == 'true') {
     next()
   } else {
      res.redirect('/login')
   }
 }  else if (req.path == '/users') {
    if(req.headers.authorization == 'Bearer token1') {
      next()
    } else {
      res.json({
        'message' : 'anda tidak berhak akses api ini'
      })
    }
 }
 else {
  next(createError(404));
 }
});


app.use('/', indexRouter);
app.use('/suits', suitsRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); // tambahin 



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
