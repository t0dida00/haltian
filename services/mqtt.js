const mqtt = require("mqtt");
var client = null;
const messageHandler = require("./message-handler")

// const MessageSchema = require("./controllers/messagesController")
function prgMqtt(MQTT_OPTION, TOPIC, CALLBACK) {
 
  if (global.client) {
    // MQTT client is already connected
    // Call callbacks with successful connection status
    console.log('Connected to MQTT already');
    CALLBACK({ status: 200, "MQTT": 'Connected to MQTT broker already' })
  } else {
    // MQTT client is not connected
    client = mqtt.connect(MQTT_OPTION);
      client.on("connect", () => {
      console.log('Connected to MQTT broker');
      client.subscribe(TOPIC);
      //messageHandler('Connected to MQTT broker')
      CALLBACK({ status: 200, "MQTT": 'Connected to MQTT broker ' })
    });
  }
  global.client=client
 client.on("message", (topic, message) => {
   console.log("message is " + message);
    messageHandler(message.toString())
    // console.log("topic is " + topic);

  });

    client.on('error', function (error) {
    console.error('MQTT connection error:', error);
   
  });
}


module.exports = { prgMqtt}