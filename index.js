const mqtt = require('mqtt')

const DB = require("./utilities/db")

var thingsee_Air= "TSAR01EWI025005681"
var thingsee_Environment= "TSPD04ESY93100802"
var url = "live-data.haltian.com"
var port = 1883
var topic = `cloudext/json/pr/fi/office/#`
var protocol = "mqtt"


const client  = mqtt.connect(`${protocol}://${url}:${port}`)

client.on('connect', function () {
    console.log("client Connected")
})
client.subscribe(`${topic}`, function () {
    console.log(`${topic} Connected`)
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