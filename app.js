var express = require('express');
var cors = require('cors');
var v1 = require('./routes/v1');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || '3000';

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/storage/api/v1', v1);

app.listen(port);
console.log('Server started on: '+ port );

module.exports = app;
