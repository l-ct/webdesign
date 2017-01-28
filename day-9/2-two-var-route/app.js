var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for css/js/img
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
	// ejs render automatically looks in the views folder
	res.render('index', {
		first: 'first',
		second: 'second'
	});
});

// both :variables are accessible through req.params
app.get('/:first/:second', function(req, res) {
	res.render('index', {
		first: req.params.first,
		second: req.params.second
	});
});

app.listen(3000);
console.log('listening on port 3000');