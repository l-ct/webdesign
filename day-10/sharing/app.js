var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// So we can grab JSON data from our clients:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var whatThisClassIs = [];

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/add', function(req, res) {
	console.log(req.body.words);
	if (req.body.words){
		whatThisClassIs.push(req.body.words);
	}
});

app.get('/api', function(req, res) {
	res.json(whatThisClassIs);
});

app.listen(3000);
console.log('listening on port 3000');