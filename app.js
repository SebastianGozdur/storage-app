var express = require('express');
var v1 = require('./routes/v1');

var app = express();
var port = process.env.PORT || '3000';

app.use('/storage/api/v1', v1);

app.listen(port);
console.log('Server started on: '+ port );

module.exports = app;
