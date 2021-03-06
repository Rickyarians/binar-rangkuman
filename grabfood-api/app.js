var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var restaurantsRouter = require('./routes/restaurants')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/', restaurantsRouter)

module.exports = app;


// Rancangan API

// nampilin restaurant terdekat -> Done
// [GET]/restoterdekat

// nampilin data bestseller ->  Done
// [GET]/menubestseller

// update data bestseller
// [PUT]/hargabestseller

// beli produk / cart
// [POST]/cart

