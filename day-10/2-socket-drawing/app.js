var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// this sets up the socket.io server
server.listen( process.env.PORT || 3000 );
console.log("Server listening on port 3000...");

// some variable that I am declaring
var composition = [];

app.get('/', function(req, res) {
	res.render('index');
});

io.on('connection', function (socket) {
  socket.emit('init', composition);
  socket.on('another click', function (data) {
    console.log(data.anotherDot);
    composition.push(data.anotherDot);
	socket.broadcast.emit('other clicks', data.anotherDot);
  });
});
