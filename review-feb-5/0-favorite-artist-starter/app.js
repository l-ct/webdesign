var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/add', function(req, res) {
	res.sendFile(__dirname + '/views/add.html');
});

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');
