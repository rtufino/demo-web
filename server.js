const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Cliente conectado!');

  ws.on('message', function incoming(message) {
    console.log(`Recibido: ${message}`);

    // Envía un mensaje al cliente que ha enviado un mensaje
    ws.send(`Respondiendo al mensaje: ${message}`);
  });
});

