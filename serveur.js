const http = require('http');

const host = 'localhost';
const port = 9000;

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end('Bonjour !');
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Serveur lancé');
});