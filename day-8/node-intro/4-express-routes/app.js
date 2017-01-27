var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/howdy', function(req, res){
	res.send('howdy');
	console.log('Howdy');
});

app.get('/almost', function(req, res){
	res.sendFile(__dirname + '/views/almost.html');
});

app.get('/api/:keyword', function(req, res){
	res.sendFile(__dirname + '/views/almost.html');
});

app.listen(3000);
console.log("listening on port 3000");