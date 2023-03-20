const mqtt = require('mqtt')

const DB = require("./utilities/db")

const DOTENV = require("./config/default")

const MessageSchema = require("./controllers/messagesController")
const client  = mqtt.connect(`${DOTENV.PROTOCOL}://${DOTENV.URL}:${DOTENV.PORT}`)



client.on('connect', function () {
    console.log("client Connected")
})
client.subscribe(`${DOTENV.TOPIC}`, function () {
    console.log(`${DOTENV.TOPIC} Connected`)
})

client.on('message', async function (topic, message) {
  // message is Buffer
  console.log(JSON.parse(message.toString()))
  const newMessage = new MessageSchema({Message:JSON.parse(message.toString())})

  await newMessage.save()

  // console.log(
  //   "Received Message: " + message.toString() + "\nOn topic: " + topic
  // );
})
