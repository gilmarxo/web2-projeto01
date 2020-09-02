const http = require('http');

const hostname = 'localhost'; //127.0.0.1

const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('');

});

server.listen(port, hostname, ()=> console.log(`Servidor rodando em: http://${hostname}:${port}`))