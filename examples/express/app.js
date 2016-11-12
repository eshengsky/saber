var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var saker = require('../../saker');
saker.config({
    defaultLayout: 'layout.html'
});

var app = express();
app.engine('html', saker.express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/', routes);

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500);
    res.end(err.stack);
});

module.exports = app;
