const { getCurrentWeather } = require("./sunsetsunrise")

const alerts = require("./alerts")

var format_message = {
    elements: {
        light: 0,
        co2: 0,
        tvoc: 0,
        humd: 0,
        airp: 0,
        temp: 0,
        sunrise: "",
        sunset: "",
        time: Date(),
    },
    gateway: "",
    devices: [],
    alerts: [],
}

getCurrentWeather((error, data) => {
    if (error) {
        console.log("Error fetching current weather:", error);
    } else {
        format_message.elements.sunset = data["sunset"]
        format_message.elements.sunrise = data["sunrise"]

    }
});
function messageIOHandler(messages) {

    // if (global.socket) {

    //String to object
    messages = JSON.parse(messages)
    
    //Save gateway information
    format_message.gateway = messages["tsmGw"]

    //Check the device ID exists or not. If it is not, save the gateway information
    if (!format_message.devices.includes(messages["tsmTuid"])) {
        format_message.devices.push(messages["tsmTuid"]);

    }

    //format_message.elements.time = Date.now()

    switch (messages["tsmId"]) {
        case 24100:
            format_message.elements.co2 = messages["carbonDioxide"]
            break;
        case 24101:
            format_message.elements.tvoc = messages["tvoc"]
            break;
        case 12100:

            format_message.elements.temp = messages["temp"] ?? format_message.elements.temp;
            format_message.elements.humd = messages["humd"] ?? format_message.elements.humd;
            format_message.elements.airp = messages["airp"] ?? format_message.elements.airp;
            format_message.elements.light = messages["lght"] ?? format_message.elements.light;

            break;
        default:
            break;
    }

    //Reset the alerts before adding new ones
    format_message.alerts = []
    //Give alerts if there is wrong
    if (alerts.checkTemperature(format_message.elements.temp)) {
        format_message.alerts.push(alerts.checkTemperature(format_message.elements.temp))
    }
    if (alerts.checkCo2(format_message.elements.co2)) {
        format_message.alerts.push(alerts.checkCo2(format_message.elements.co2))
    }
   
    //console.log("Message handler: ", format_message)
    // global.socket.emit("message", JSON.stringify(format_message))
    global.message = format_message
    //}
}


module.exports = messageIOHandler;