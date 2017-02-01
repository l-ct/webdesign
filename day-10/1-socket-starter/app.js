var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

// this sets up the socket.io server
server.listen(process.env.PORT || 3000);
console.log("server listening on port 3000...");

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

// http://socket.io/docs/
io.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});