var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var collection = [];

// So we can grab JSON data from our clients:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/squares', function(req, res) {
	res.render('squares', {
		squares: collection
	});
});

app.post('/save', function(req, res) {
	console.log(req.body.drawing);
	if (req){
		collection.push(req.body.drawing);
	}
});

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');
