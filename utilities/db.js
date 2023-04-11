const DOTENV = require("../config/default")

const mongoose = require("mongoose")


mongoose.set("strictQuery",false);
const connection = mongoose.connect(DOTENV.DATA_URL).then(()=>console.log("Connecting to MongoDB successfully"))

module.exports = connection