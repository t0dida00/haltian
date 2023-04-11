
const MessageModel = require("../models/messageModel")

module.exports ={
     dataSave: (message) =>
    {
        console.log(message.elements.co2 +message.elements.temp + message.elements.humd )
        const data = new MessageModel({
            CO2:message.elements.co2,
            humidity: message.elements.humd,
            temperature: message.elements.temp,
            time: message.elements.time
        })
        data.save().then(()=>
        console.log("Data save")
        ).catch(err => console.log(err))
    }
}


