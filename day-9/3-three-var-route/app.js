var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for css/js/img
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {
	res.render('index', {
		one: 1,
		two: 2,
		three: 3
	});
});

// all three :variables are accessible through req.params
app.get('/:one/:two/:three', function(req, res) {
	res.render('index', {
		one: req.params.one,
		two: req.params.two,
		three: req.params.three
	});
});

app.listen(3000);
console.log('listening on port 3000');