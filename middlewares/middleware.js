//const {dataSave} = require("../services/mongoSaver")


function EmitMessage(req, res, next) {
  // Run the function immediately upon starting the server
 
  // Schedule the function to run every 5 minutes
  //setInterval((runFunction), 5 * 60 * 1000);
  setInterval(() =>{
    if (global.socket &&global.message ) {
      
        global.message.elements.time=Date.now()
        // dataSave(global.message)
         global.socket.emit("message",JSON.stringify(global.message))
      
    // console.log(Date())
   
  }
  }, 5 * 60 * 1000);
  next();
}

function runFunction() {
  // Code for the function you want to run every 5 minutes goes here
  //console.log(global.message)
   if (global.socket) {
    if(global.message)
    {
      global.message.elements.time=Date.now()
      // dataSave(global.message)
       global.socket.emit("message",JSON.stringify(global.message))
    }
   
  
  // console.log(Date())
 
}


}


module.exports ={
  EmitMessage
}