const socketIo = require('socket.io');
// const messageHandler = require("./message-handler")
// var cors = require('cors')
function SocketIO(server) {
   
  const io = socketIo(server,{
    cors:{
       origin:'*',
       methods:["GET","POST"],
       credentials:true
    }
   });

  io.on('connection', (socket) => {
   
    console.log(`Client ${socket.id} connected`);

    socket.on('disconnect', () => {
      console.log('Socket.IO client disconnected');
    });
    global.socket = io;
  
  
  });
  
}

module.exports = SocketIO;