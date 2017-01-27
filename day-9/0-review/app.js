var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {
		message1: 'Bonjour',
		message2: 'Salut',
		message3: 'Cou cou',
	});
});

app.get('/:word/:anotherword/:yetanother', function(req, res){
	res.render('index', {
		message1: req.params.word,
		message2: req.params.anotherword,
		message3: req.params.yetanother
	});
});

app.get('/:word/:anotherword', function(req, res){
	res.render('index', {
		message1: req.params.word,
		message2: req.params.anotherword,
		message3: ''
	});
});


app.listen(3000);
console.log('listening on port 3000');