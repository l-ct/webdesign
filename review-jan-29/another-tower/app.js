var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
	res.render('index', {
	  size : 100
	});
});

app.get("/:size", function(req, res) {
	res.render('index', {
	  size : req.params.size,
	});
});

app.listen(process.env.PORT || 3000);
console.log('Express started on port 3000');



