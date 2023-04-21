
// Function to check temperature and trigger alert

function Message(element, index, alert) {
    return {
        element: element,
        index: index,
        alert: alert
    };
}

module.exports = {
    checkTemperature: (currentTemperature, callback) => {
        if (currentTemperature <16) {
            return Message("temperature", "deepskyblue", "The temperature is so slow, may feel uncomfortable and increase the risk of respiratory problems")
            //return "The temperature is so slow, may feel uncomfortable and increase the risk of respiratory problems"
        }
        else if (currentTemperature > 30 && currentTemperature < 50) {
            return Message("temperature", "orange", "The temperature is so high, warning a potential fire")
            //return "The temperature is so high, warning a potential fire"
        }
        else if (currentTemperature >= 50) {
            return Message("temperature", "red", "The temperature is critical level, maybe a fire")
            //return "The temperature is critical level, maybe a fire"
        }

    },
    checkCo2: (currentCo2, callback) => {
        if (currentCo2 > 2000 && currentCo2 < 5000) {
           // return "Poor air quality, may cause fatigue and headache";
            return Message("co2", "orange", "Poor air quality, may cause fatigue and headache")
        } else if (currentCo2 >= 5000) {
            return Message("co2", "red", "Very poor air quality, may cause nausea and dizziness")
           // return "Very poor air quality, may cause nausea and dizziness"
        }

    },
    checkTVOC: (TVOC) => {
        if (TVOC >= 300 && TVOC < 1000) {
            // return "TVOC level is high,may cause some individuals to experience minor symptoms such as headaches or respiratory irritation."
            return Message("tvoc", "orange", "TVOC level is high,may cause some individuals to experience minor symptoms such as headaches or respiratory irritation.")

        }
        // if (TVOC < 1000) {
        //     return "TVOC level is high,may cause some individuals to experience minor symptoms such as headaches or respiratory irritation."
        // }
        else if (TVOC >= 1000) {
            return Message("tvoc", "red", "TVOC level is critical, may cause more severe symptoms such as dizziness, nausea, and fatigue.")
           // return "TVOC level is critical, may cause more severe symptoms such as dizziness, nausea, and fatigue."
        }
    },
    checkHumidity: (humd) => {

        if (humd < 30) {
            return Message("humidity", "yellow", "Humidity is low, cause dry skin, respiratory irritation, and static electricity.")
        }
        // if (humd < 30) {
        //     return "Humidity is low, cause dry skin, respiratory irritation, and static electricity."
        // }
        else if (humd > 60) {
            return Message("humidity", "red", "Humidity is critical,can trigger respiratory problems and allergies")
            //return "Humidity is critical,can trigger respiratory problems and allergies"

        }

    },

    AirQuanlityIndex: (elements) => {
        const co2 = elements.co2
        const temp = elements.temp
        const tvoc = elements.tvoc
        const humd = elements.humd
        //IAQ = (TVOC + Temperature + humidity + CO2)/4
        if (co2 && temp && tvoc && humd) {
            // This scaling ensures that the highest TVOC concentration measured indoors corresponds to the highest IAQI value of 500.
            const tvoc_score = (tvoc / 500) * 100
            // The formula first calculates the absolute difference between the standard temperature of 20°C and the actual indoor temperature
            const temp_score = (20 - Math.abs(20 - temp)) / 2
            //The formula first calculates the absolute difference between the standard humidity level of 45% and the actual indoor relative humidity
            const humd_score = Math.abs(humd - 45) * 2
            //The concentration of CO2 is typically measured in parts per million (ppm). In order to map this measurement to an IAQI scale ranging from 0 to 500
            const co2_score = (co2 / 1000) * 100
            const AQI_score = (tvoc_score + temp_score + humd_score + co2_score) / 4
            //const AQI_score = (tvoc_score + temp_score) * 0.3 + (humd_score + co2_score) * 0.2

            return Math.round(AQI_score)
        }
        else {
            return "Analyzing"
        }

    },
    AirQuality: (AQI_score) => {
        if (typeof AQI_score === "number" && AQI_score > 0) {
            if (AQI_score <= 30) {
                return "Excellent"
            }
            else if (AQI_score <= 50) {
                return "Good"
            }
            else if (AQI_score <= 100) {
                return "Moderate"
            }
            else if (AQI_score <= 150) {
                return "Unhealthy for Sensitive Groups"
            }
            else if (AQI_score <= 200) {
                return "Unhealthy "
            }
            else if (AQI_score <= 300) {
                return "Very Unhealthy "
            }
            else {
                return "Excellent"
            }

        }
        else {
            return "Analyzing"
        }
    }
}