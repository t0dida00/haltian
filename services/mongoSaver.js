
const MessageModel = require("../models/messageModel")

module.exports ={
     dataSave: () =>
    {
        if(global.message)
        {  const AirElements= global.message.elements
            const data = new MessageModel({
                CO2:AirElements.co2,
                humidity: AirElements.humd,
                temperature:AirElements.temp,
                time:Date.now()
            })
            data.save().then(()=>
            console.log("Data save")
            ).catch(err => console.log(err))}
            else{
                console.log("No data saved ")
            }
      
        //console.log("Data save")
    }
   
}


