var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("App listening at http://%s:%s", host, port)
 })