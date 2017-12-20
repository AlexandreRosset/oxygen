var http = require("http");
var app = require('express')();
var express = require('express');


httpserver = http.createServer(app);


app.get('/', function (req, res) {
  res.sendfile(__dirname + 'app/src/templates/index.html');
});


app.get('*', function(req, res){
  res.status(404).sendfile(__dirname + '/app/src/templates/404.html');
});


httpserver.listen(6666);
var io = require('socket.io').listen(httpserver);


io.sockets.on('connection', function (socket) {

});
