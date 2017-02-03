var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/public'));

// So we can grab JSON data from our clients:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var favoriteArtists = [];

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/add', function(req, res) {
	res.sendFile(__dirname + '/views/add.html');
});

app.post('/api/add', function(req, res) {
	console.log(req.body);
	if (req.body){
		favoriteArtists.push(req.body);
	}
});

app.get('/api/artists', function(req, res) {
	res.json(favoriteArtists);
});

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');
