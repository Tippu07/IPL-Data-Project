
var http = require('http');
var server = http.createServer(function(req, res){
  console.log('Request was made in '+ req.url);
  res.writeHead(200,{'content-Type': 'text/plain'});
  res.end('Hey ninjas');
})

server.listen(3000,'127.0.0.1');
console.log('server is running on port 3000');