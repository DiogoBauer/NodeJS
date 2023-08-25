var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Meu primeiro app NodeJS!');
  console.log('Servidor rodando em http//localhost:8080/')
}).listen(8080); 

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface'); 