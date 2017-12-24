var http = require("http");
var app = require('express')();
var express = require('express');


httpserver = http.createServer(app);


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/src/templates/index.html');
});

app.use('/css', express.static('src/css'));
app.use('/js', express.static('src/js'));
app.use('/tpe', express.static('src/templates'));


app.get('*', function(req, res){
  res.status(404).sendfile(__dirname + '/src/templates/404.html');
});


httpserver.listen(8000);

/*
var io = require('socket.io').listen(httpserver);


io.sockets.on('connection', function (socket) {

});*/


console.log('Server running at http://127.0.0.1:8000/');