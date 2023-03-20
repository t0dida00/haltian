const DEFAULT = require("../config/default")

const mongoose = require("mongoose")

console.log(DEFAULT.DATA_URL)

mongoose.set("strictQuery",false);
//mongoose.connect(DOTENV.DATA_URL).then(()=>console.log("Connecting to MongoDB successfully"))