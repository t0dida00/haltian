'use strict'
require("dotenv").config({path:'./.env'})

const{DATA_URL,THINGSEE_AIR,THINGSEE_ENVIRONMENT,URL,PORT,TOPIC,PROTOCOL }= process.env



module.exports = {DATA_URL,THINGSEE_AIR,THINGSEE_ENVIRONMENT,URL,PORT,TOPIC,PROTOCOL }