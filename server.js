var net = require('net');

var server = net.createServer(socket => {
  socket.write('Echo server\r\n');
  socket.pipe(socket);

  socket.on('error', (err) => {
    console.log(`Error: ${err.message}`);
  })
});

server.listen(1337, '127.0.0.1');
