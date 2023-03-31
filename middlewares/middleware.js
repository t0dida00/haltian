const fs = require("fs")
const path = require("path")
const directoryPath = './certificates/';
const filePath = path.join(__dirname, "../certificates", 'MQTT_OPTION.txt');
const session = require('express-session');
const express = require('express');

var MQTT_OPTION = {}

module.exports = (req, res, next) => {

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    const matchingFiles = files.filter((file) => path.extname(file) === ".txt");
    if (matchingFiles.length > 0) {
   
      fs.readFile( filePath, (err, data) => {
        if (err) throw err;
        var options= data.toString().split(",\n")
        
          MQTT_OPTION["host"]=options[0]
          MQTT_OPTION["port"]=options[1]
          MQTT_OPTION["protocol"]=options[2]
          MQTT_OPTION["key"]=  fs.readFileSync(options[3])
          MQTT_OPTION["cert"]=  fs.readFileSync(options[4])
          MQTT_OPTION["rejectUnauthorized"]=false        
         req.session.MQTT_OPTION = MQTT_OPTION
         req.session.MQTT_TOPIC = options[5]
      next()
      });

    }

    else {
      return res.send("No certificates exists !!! Unauthorized")
    }
  })
  }