var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for css/js/img
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
	// ejs render automatically looks in the views folder
	res.render('index', {message: 'URL to Word'});
});

// a new API route
app.get('/api', function(req, res) {
	// send a fixed json object
	res.json({greeting: 'ohhhhh yea'});
});

app.listen(3000);
console.log('listening on port 3000');