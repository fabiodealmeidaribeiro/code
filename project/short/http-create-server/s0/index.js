require('http').createServer((req, res, next) => {
    console.log('server running...');    
    res.writeHead(200, { 'Content-type' : 'text/plain', });
    switch(req['url']) {
        case '/' :
            res.end('Home');
        break;
        case '/contact' :
            res.end('Contact');
        break;
        default :
            res.end('...');
        break;
    };
}).listen(3333, 'localhost');