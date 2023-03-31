const mqtt = require("mqtt");
var client = null;
// const MessageSchema = require("./controllers/messagesController")
function prgMqtt(MQTT_OPTION, TOPIC, CALLBACK) {
  if (client) {
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
      CALLBACK({ status: 200, "MQTT": 'Connected to MQTT broker ' })
    });
  }

  // prgMqtt.client.on("message", (topic, message) => {
  //   //io.emit('mqtt-message', message);
  //   console.log("message is " + message);
  //   console.log("topic is " + topic);

  // });

    client.on('error', function (error) {
    console.error('MQTT connection error:', error);
    CALLBACK({ status: 401, "MQTT": 'MQTT connection error' })
  });
}

function onMessage(callback) {
  if(client)
{
 client.on("message", (topic, message) => {
    console.log("message is " + message);
    console.log("topic is " + topic);
})
    
}}

module.exports = { prgMqtt,client ,onMessage}