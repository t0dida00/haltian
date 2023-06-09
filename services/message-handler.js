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
    AQI: 0,
    Quality: "",
    outdoor: {
        aqi: 0,
        temp: 0,
        app_temp: 0,
        humidity: 0,
        wind_spd: 0,
        ob_time: "",
        description: ""
    }
}

// getCurrentWeather((error, data) => {
//     if (error) {
//         console.log("Error fetching current weather:", error);
//     } else {

//         format_message.elements.sunset = data["sunset"]
//         format_message.elements.sunrise = data["sunrise"]
//         format_message.outdoor = { aqi_outdoor: data["aqi"],
//         app_temp: data["app_temp"],
//         temperature:data["temp"],
//         humidity:data["rh"],
//         wind_spd:data["wind_spd"],
//         ob_time:data["ob_time"],
//         description:data["weather"]["description"]

//        }

//     }
// });
function fetchWeatherData() {
    getCurrentWeather((error, data) => {
        if (error) {
            console.log("Error fetching current weather:", error);
        } else {
            format_message.elements.sunset = data["sunset"]
            format_message.elements.sunrise = data["sunrise"]
            format_message.outdoor = {
                aqi_outdoor: data["aqi"],
                app_temp: data["app_temp"],
                temperature: data["temp"],
                humidity: data["rh"],
                wind_spd: data["wind_spd"],
                ob_time: data["ob_time"],
                description: data["weather"]["description"]
            }
        }
    });
}
fetchWeatherData();
setInterval(fetchWeatherData, 60 * 60 * 1000);

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
    //console.log(alerts.AirQuanlityIndex(format_message.elements))
    //Reset the alerts before adding new ones
    format_message.AQI = alerts.AirQuanlityIndex(format_message.elements)
    format_message.Quality = alerts.AirQuality(format_message.AQI)
    if (typeof (format_message.AQI) == "number") {
        format_message.alerts = []
        //Give alerts if there is wrong
        if (alerts.checkTemperature(format_message.elements.temp)) {
            format_message.alerts.push(alerts.checkTemperature(format_message.elements.temp))
        }
        if (alerts.checkCo2(format_message.elements.co2)) {

            format_message.alerts.push(alerts.checkCo2(format_message.elements.co2))
        }
        if (alerts.checkTVOC(format_message.elements.tvoc)) {
            format_message.alerts.push(alerts.checkTVOC(format_message.elements.tvoc))
        }
        if (alerts.checkHumidity(format_message.elements.humd)) {

            format_message.alerts.push(alerts.checkHumidity(format_message.elements.humd))
        }
    }



    console.log("Message handler: ", format_message)
    global.message = format_message
    //}
}


module.exports = messageIOHandler;