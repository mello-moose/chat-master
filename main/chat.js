const server = require('http').createServer();
const fs = require('fs');
const path = require('path');
const io = require('socket.io')(server);

server.on('request', (req, res) => {
    fs.createReadStream(path.resolve(__dirname, 'chat.html')).pipe(res);
}).listen('8080');

io.sockets.on('connection', function (socket) {
    socket.on('new_message', function (message) {
        io.emit('success', '' + new Date() + ': ' + message);
    })
});