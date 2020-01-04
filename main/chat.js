const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.createReadStream('chat.html').pipe(res);
}).listen('8080');