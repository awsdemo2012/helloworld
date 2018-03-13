// This is a simple hello world project for node.
var http = require('http');

function onRequest(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World');
  response.end();
}
// This will create a server on port 5000
http.createServer(onRequest).listen(5000);

console.log('Started server @ 5000');
