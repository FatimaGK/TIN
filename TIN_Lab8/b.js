var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var par = bodyParser.urlencoded({extended: false});
var dir = "C:\\Users\\Tami\\Desktop\\New folder";
app.set('view engine', 'pug');

app.get('/form', function(req, res) {
    res.sendFile(dir + "/" + "b.html");
    //res.sendFile(b.html);
})

app.post('/formdata',par, function(req, res) {
    var name = req.body.first_name;
    var lastname = req.body.last_name;
    var studentId = req.body.student_id;
    var page =  'Your name: ' + name + '<br>Your lastname: ' + lastname + '<br>Your ID: ' + studentId;
    res.send(page);
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("App listening at http://%s:%s", host, port)
 })