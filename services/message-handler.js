function messageIOHandler( messages) {  
        global.socket.emit('message', messages);
  }
  
  module.exports = messageIOHandler;