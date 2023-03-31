'use strict'
require("dotenv").config({path:'./.env'})


const{DATA_URL,THINGSEE_AIR,THINGSEE_ENVIRONMENT,URL,PORT,TOPIC,PROTOCOL,DEMO_URL, DEMO_PORT, DEMO_TOPIC,KEY_PATH,PEM_PATH }= process.env

module.exports = {DATA_URL,DEMO_URL, DEMO_PORT, DEMO_TOPIC,TOPIC }