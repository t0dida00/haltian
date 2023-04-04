var format_message = {
    elements: {
        light: 0,
        co2: 0,
        tvoc: 0,
        humd: 0,
        airp:0,
        temp:0,
        time: Date(),
    },
    gateway: "",
    devices: []
}

function messageIOHandler(messages) {
    const copyArray = { ...format_message };

    if (global.socket) {
        //String to object
        messages = JSON.parse(messages)

        //Save gateway information
        format_message.gateway = messages["tsmGw"]

        //Check the device ID exists or not. If it is not, save the gateway information
        if (!format_message.devices.includes(messages["tsmTuid"])) {
            format_message.devices.push(messages["tsmTuid"]);
        
        }

        format_message.elements.time =Date.now()
        switch (messages["tsmId"]) {
            case 24100:
                format_message.elements.co2= messages["carbonDioxide"]
                break;
            case 24101:
                format_message.elements.tvoc= messages["tvoc"]
                break;
            case 12100:

                format_message.elements.temp= messages["temp"]
                format_message.elements.humd= messages["humd"]
                format_message.elements.airp= messages["airp"]
                if(messages["lght"] != null ||messages["lght"] != undefined)
                {
                    format_message.elements.light=messages["lght"]
                }
                break;
            default:
                break;
        }


        console.log("Message handler: ",format_message)
        global.socket.emit("message", JSON.stringify(format_message))



    }

}

module.exports = messageIOHandler;