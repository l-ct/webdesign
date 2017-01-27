// http://expressjs.com/en/4x/api.html#app
// Instead of http we now require express
var express = require('express');
var app = express();

// app.get is passed a string corresponding to the route
// and a call back function with the request and response
app.get('/', function(request, response){
	response.send('Howdy!');
});

app.listen(3000);
console.log("listening on port 3000");