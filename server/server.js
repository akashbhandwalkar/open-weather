var express = require('express');
var app = express();
var path = require('path');
console.log("__dirname-->", __dirname);
app.use( express.static( __dirname + '/client' ));
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.listen(8080);