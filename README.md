# THE INDOOR AIR QUALITY MONITORING

The project aimed to create an indoor air quality monitoring application using Thingsee Air and Environment sensors. The app would display carbon dioxide, humidity, temperature, light level, air pressure, and sunrise/sunset times, and alert the user if any readings were concerning. The app also included a history feature for administrators to view past data. The app was designed to be dynamic, allowing users to input host URL, port, and topic and select the protocol and necessary certificates.

## Technologies

Server-side: NodeJs (v16.14.x) – ExpressJS(v4.18.x). 

Client-side: ReactJS. 

Protocol: mqtt, socketIO. 

Equipments: the Thingsee Air, Enviroment and Gateway sensors. 

Database: MongoDB. 

## Source

Live: https://main--lustrous-platypus-be1445.netlify.app/?fbclid=IwAR2N_vHAJqSPX_s2CT2HDm9qV_BIK6CQ5HPsjPOqm46fJxKRLDKvtBvkXYQ

## Main Features
+ Dashboard: A dashboard that provides an overview of the current environmental conditions in the location, including CO2 levels, air pressure, humidity, temperature, light level and TVOC levels. This dashboard could display the data in a clear and visually appealing way, such as with graphs, charts, and other data visualizations. Besides, it provides the outdoor weather which is getting from the weather API
+ Alerts: The web application could include alerts that notify users when environmental conditions exceed certain thresholds. For example, if the CO2 level reaches a certain threshold, the web application could send an email or push notification to the user to alert them to the issue.
+ Historical data: The web application could include a historical data feature that allows users to view past environmental conditions for a specific location. This feature could include graphs or other data visualizations that show trends over time for each environmental parameter.
## Alerts and thresholds
<img width="637" alt="Screenshot 2023-04-25 at 16 10 07" src="https://user-images.githubusercontent.com/70305254/234286666-2e389c5d-a33c-4900-b7ba-61b57f0110ec.png">
<img width="629" alt="Screenshot 2023-04-25 at 16 10 47" src="https://user-images.githubusercontent.com/70305254/234286826-f2df94fc-c4d1-4457-b2b8-41b973d88d08.png">
<img width="609" alt="Screenshot 2023-04-25 at 16 10 58" src="https://user-images.githubusercontent.com/70305254/234286878-390e38d1-5d47-4ba2-af7c-f67c573daec3.png">
<img width="609" alt="Screenshot 2023-04-25 at 16 11 12" src="https://user-images.githubusercontent.com/70305254/234286943-4fb1f0a9-810f-416a-a08b-f2743e425e20.png">
<img width="630" alt="Screenshot 2023-04-25 at 16 11 37" src="https://user-images.githubusercontent.com/70305254/234287053-8612192c-9b04-4d7e-9db0-20fa32d1ed0a.png">

## Installing

Cloning the project
```
git clone https://github.com/t0dida00/haltian.git
```

Installing packages

```
npm i 
```

At socket.html line 12:


```
const socket = io('https://air-quality.azurewebsites.net');

```
change to
```
const socket = io('localhost](http://localhost:8080/)');

```
Running application. 
```
npm start 

```
or
```
npm dev 

```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds


## Authors
Dinh Dang Khoa - t0dida00@students.oamk.fi
Duong Pham - t0phtr00@students.oamk.fi

## Captures of Application

<img width="763" alt="Screenshot 2023-04-25 at 16 14 55" src="https://user-images.githubusercontent.com/70305254/234287879-602b639c-749e-4985-a645-2e41e5454715.png">

<img width="1266" alt="Screenshot 2023-04-25 at 16 15 12" src="https://user-images.githubusercontent.com/70305254/234287960-734c832f-72b7-4cc5-8a52-d1bde9d0a587.png">

<img width="797" alt="Screenshot 2023-04-25 at 16 16 07" src="https://user-images.githubusercontent.com/70305254/234288199-63c7a72e-9164-4c6b-8f7d-cf627995dc89.png">
