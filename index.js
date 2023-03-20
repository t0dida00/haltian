const mqtt = require('mqtt')

const DB = require("./utilities/db")

const DOTENV = require("./config/default")

const client  = mqtt.connect(`${DOTENV.PROTOCOL}://${DOTENV.URL}:${DOTENV.PORT}`)

client.on('connect', function () {
    console.log("client Connected")
})
client.subscribe(`${DOTENV.TOPIC}`, function () {
    console.log(`${DOTENV.TOPIC} Connected`)
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(
    "Received Message: " + message.toString() + "\nOn topic: " + topic
  );
})


// URL      : live-data.haltian.com
// Port     : 1883
// Password : none
// Topic    : cloudext/json/pr/fi/office/#