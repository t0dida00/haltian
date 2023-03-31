const socketIo = require('socket.io');
const messageHandler = require("./message-handler")
function SocketIO(server) {
   
  const io = socketIo(server);
  const messages = [
    'Hello from server!',
    'How are you?',
    'What are you up to?',
  ];
  io.on('connection', (socket) => {
   
    console.log('Socket.IO client connected');

    socket.on('disconnect', () => {
      console.log('Socket.IO client disconnected');
    });
    global.socket = socket;
  
  
  });
  
}

module.exports = SocketIO;