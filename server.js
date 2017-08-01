var http  = require('http');

var PORT = 7000;

function handleRequest(req, res) {
  res.end('hey this is my first server'
  + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log('server listening on: http://localhost:${PORT}');
});

var PORT2 = 7500;

function handleRequest2(req, res) {
  res.end('your first server is bad'
  + req.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT2, function() {
  console.log('server listening on: http://localhost:${PORT}');
});
