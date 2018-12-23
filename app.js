var express = require('express');
var v1 = require('./routes/v1');

var app = express();
var port = process.env.PORT || '3000';

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'webdevproject'
    });
    res.locals.connection.connect();
    next();
});
app.use('/api/v1', v1);


app.listen(port);
console.log('Server started on: '+ port );

module.exports = app;