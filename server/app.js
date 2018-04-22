var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://user:123456@ds251179.mlab.com:51179/stms');

var UserController = require('./controllers/UserController.js');
var AuthenticateController = require('./controllers/AuthenticateController.js');

app.use('/users', UserController);
app.use('/authenticate', AuthenticateController);

module.exports = app;