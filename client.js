var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', () => {
  console.log('Connected');
  client.write('Hello, server! Love, Client.');
});

client.on('data', (data) => {
  console.log('Received: ' + data);
  client.destroy();
});

client.on('close', () => {
  console.log('Connection closed');
});
