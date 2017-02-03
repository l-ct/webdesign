var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

server.listen(process.env.PORT || 3000);
console.log('listening on port 3000');

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});
