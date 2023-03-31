const express = require('express');
const DB = require("./utilities/db")
const app = express();
const session = require('express-session');


// const middleware = require("./middlewares/middleware")
app.use(express.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
// const options = {
//   host: 'a39cwxnxny8cvy.iot.eu-west-1.amazonaws.com',
//   port: 8883,
//   protocol: 'mqtt',
//   // key: fs.readFileSync(`./certificates/sales-cloudext-prfi00airquality.key`),
//   // cert: fs.readFileSync(`./certificates/sales-cloudext-prfi00airquality.pem`),
//   rejectUnauthorized: false
// };

app.use('/set-up', require('./routes/installation'));

const PORT = 3000

app.listen(PORT, function () {
  console.log(`Server running at port ` + PORT);
})
