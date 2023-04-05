
// Function to check temperature and trigger alert

module.exports = {
    checkTemperature: (currentTemperature, callback) => {
        // Replace 'currentTemperature' with your sensor reading
        // var temperatureThreshold = 20;
        // if (currentTemperature > temperatureThreshold) {
        //     return 'Temperature is above threshold!';
        // }
        switch (currentTemperature) {
            case currentTemperature < 16:
                return "Temperature is cold, let's open heater"
            case currentTemperature >= 16 && currentTemperature <= 22:
                return "Temperature is comfortable"
            case currentTemperature < 30:
                return "Temperature is hot now, let's open window or open AC";
            case currentTemperature < 40:
                return "Temperature is too hot now, there is some wrong, maybe a fire"
            case currentTemperature > 41:
                return "Fire fire fire"
        }
    },
    checkCo2: (currentCo2, callback) => {
        // Replace 'currentTemperature' with your sensor reading
        // var co2Threshold = 1500;
        // if (currentCo2 > co2Threshold) {
        //     return 'CarbonDioxide is above threshold!';
        // }
        switch (currentCo2) {
            case currentCo2 <= 1000:
                return "Co2 level is good"
            case currentCo2 <= 1500:
                return "Co2 level is normal"
            case currentCo2 > 2000:
                return "Co2 level is bad,ventilation recommended"
    
        }
    }
}