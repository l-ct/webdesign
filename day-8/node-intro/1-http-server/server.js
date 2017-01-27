// require is a function defined by node to load any modules
var http = require('http');

// createServer is a method that takes an anonymous function
// the first argument becomes the request, the second, is the response
http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.end('Hello World\n');
}).listen(3000);

// the console is no longer on the client but on the server
console.log('server listening on port 3000');