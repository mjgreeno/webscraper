var express = require('express');
const app = require('express')();
const routes = require('./app/routes');
var router = express.Router();
app.set('view engine', 'pug');
const bodyParser = require('body-parser');
var port    =   process.env.PORT || 3434;
var x = require('x-ray');
const request = require('request');
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

   

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

 	