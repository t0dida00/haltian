const mqtt = require('mqtt')

const DB = require("./utilities/db")

const DOTENV = require("./config/default")
const fs = require("fs")
const MessageSchema = require("./controllers/messagesController")
//const client  = mqtt.connect(`${DOTENV.PROTOCOL}://${DOTENV.URL}:${DOTENV.PORT}`,{cert: fs.readFileSync('C:/Program Files/mosquitto/certificates/sales-cloudext-prfi00airquality.key')})


const options = {
  host: 'a39cwxnxny8cvy.iot.eu-west-1.amazonaws.com',
  port: 8883,
  protocol: 'mqtt',
  key: fs.readFileSync(`C:/Program Files/mosquitto/certificates/sales-cloudext-prfi00airquality.key`),
  cert: fs.readFileSync(`C:/Program Files/mosquitto/certificates/sales-cloudext-prfi00airquality.pem`),
  rejectUnauthorized: false
};

//const client  = mqtt.connect(`${DOTENV.PROTOCOL}://${DOTENV.URL}:${DOTENV.PORT}`,{cert: fs.readFileSync('C:/Program Files/mosquitto/certificates/sales-cloudext-prfi00airquality.key')})

const client = mqtt.connect(options);

client.on('connect', function () {
  console.log('Connected to MQTT broker');
  // subscribe to topics or publish messages here
});
client.subscribe('cloudext/json/pr/fi/prfi00airquality/#');
client.on('error', function (error) {
  console.error('MQTT connection error:', error);
});

client.on('close', function () {
  console.log('MQTT connection closed');
});

client.on('message', function (topic, message) {
  console.log(`Received message on ${topic}: ${message.toString()}`);
});


// client.on('connect', function () {
//   if (client.connected === true) {
//    client.subscribe(`${DOTENV.TOPIC}`, function () {
//     console.log(`${DOTENV.TOPIC} Connected`)
//         })
// }
// })

// client.on("error",function(error){ 
//   console.log("Can't connect"+error)
// });

// client.subscribe(`${DOTENV.TOPIC}`, function () {
//     console.log(`${DOTENV.TOPIC} Connected`)
// })

client.on('message', async function (topic, message) {
  // message is Buffer
  console.log(JSON.parse(message.toString()))
  // const newMessage = new MessageSchema({Message:JSON.parse(message.toString())})

  // await newMessage.save()

  // console.log(
  //   "Received Message: " + message.toString() + "\nOn topic: " + topic
  // );
})
