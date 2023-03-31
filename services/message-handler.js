function messageIOHandler( messages) {  
    if(global.socket)
    {
        global.socket.emit('message', messages);
    }
       
  }
  
  module.exports = messageIOHandler;