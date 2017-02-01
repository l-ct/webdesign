var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

// this sets up the socket.io server
server.listen(process.env.PORT || 3000);
console.log("Server listening on port 3000...");

app.get('/', function(req, res) {
	// I'm not rendering an ejs file here.
	// just using sendFile to send regular .html
	res.sendFile(__dirname + '/views/index.html');
});

// I'm going to store all of my divs in an array
var composition = [];

// this sets the connection.
io.on('connection', function (socket) {
	// each time a users connects, init is emited.
	socket.emit('init', composition);
	// server looks out for updates on 'another click'
	// if an update occurs, then the callback is fired
	socket.on('another click', function (data) {
		console.log(data);
		// adding the new div to my array
		composition.push(data);
		// sending the div to all the other users.
		socket.broadcast.emit('other clicks', data);
	});
});
