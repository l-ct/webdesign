var express = require('express');
var app = express();
var Request = require('request');

// app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

// a new API route
app.get('/api/:city', function(req, res) {
	console.log(req.params.city);
	var city = req.params.city;
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='
				+ city
				+ '&APPID=f350b881c646a722a61ced9928a12afa';
	// using the new Request object
	Request(url, function (error, response, body) {
		// console.log(body);
		var theData = JSON.parse(body);
		console.log(theData);
		res.json(theData.weather[0].description);
	});
});

app.listen(3000);
console.log('listening on port 3000');