//const {dataSave} = require("../services/mongoSaver")


// function EmitMessage() {
//   // Run the function immediately upon starting the server
//   runFunction
//   // Schedule the function to run every 5 minutes
//   //setInterval((runFunction), 5 * 60 * 1000);
//   setInterval(
//     runFunction, 1 * 60 * 1000);
 
// }

function EmitMessage() {
  // Code for the function you want to run every 5 minutes goes here
  //console.log(global.message)
  if (global.socket && global.message) {

    global.message.elements.time = Date.now()
    // dataSave(global.message)
    global.socket.emit("message", JSON.stringify(global.message))

  }


}


module.exports = {
  EmitMessage,
  
}