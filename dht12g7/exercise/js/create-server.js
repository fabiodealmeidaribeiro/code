let http = require('http');
http.createServer((req, res) => {
    return res.end('Ola!');
}).listen(3030);
console.log('server running...');