var express = require('express');
var bodyParser = require("body-parser");
var Request = require('request');

var app = express();

app.use(express.static(__dirname + '/public'));

// So we can grab JSON data from our clients:
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cloudant credentials
// var cloudant_USER = 'YOUR-USER-NAME';
// var cloudant_DB = 'YOUR-DB-NAME';
// var cloudant_KEY = 'YOUR-DB-KEY';
// var cloudant_PASSWORD = 'YOUR-DB-PASSWORD';

var cloudant_USER = 'l-ct';
var cloudant_DB = 'favoriteartist';
var cloudant_KEY = 'theluitycarmeentsingling';
var cloudant_PASSWORD = 'dbe920454f7f0e47610e8da3e57c0b31fbcf83fa';

var cloudant_URL = "https://" + cloudant_USER + ".cloudant.com/" + cloudant_DB;


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/add', function(req, res) {
	res.sendFile(__dirname + '/views/add.html');
});

app.post('/api/add', function(req, res) {
	console.log(req.body);
	if (req.body){
		Request.post({
			url: cloudant_URL,
			auth: {
				user: cloudant_KEY,
				pass: cloudant_PASSWORD
			},
			json: true,
			body: req.body
		},
		function (error, response, body){
			if (response.statusCode == 201){
				console.log("Saved!");
				res.json(body);
			} else {
				console.log("Error: " + res.statusCode);
				res.json({error: res.statusCode});
			}
		});
	}
});

app.get('/api/artists', function(req, res) {
	Request.get({
		url: cloudant_URL + '/_all_docs?include_docs=true',
		auth: {
			user: cloudant_KEY,
			pass: cloudant_PASSWORD
		},
		json: true
	},
	function (error, response, body){
		console.log(body);
		res.json(body.rows);
	});
});

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');
