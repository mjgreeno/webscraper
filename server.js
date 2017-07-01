let express = require('express');
const app = require('express')();
const routes = require('./app/routes');
let router = express.Router();
app.set('view engine', 'pug');
const bodyParser = require('body-parser');
let port = process.env.PORT || 3434;
const request = require('request');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', routes);

app.listen(port);
console.log('Welcome Srappy the WordPress scraper is running: ' + port);

 	