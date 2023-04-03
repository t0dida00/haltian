const express = require('express');
const DB = require("./utilities/db")
const app = express();
const session = require('express-session');
var cors = require('cors')



const http = require('http');
const initSocketIo = require('./services/socket');
const server =  http.createServer(app)

// const middleware = require("./middlewares/middleware")
app.use(express.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.options('*', cors())

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

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/socket.html');
});


initSocketIo(server);
const PORT = 3000

app.listen(3001, function () {
  console.log(`Server running at port ` + 3001);
})

server.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:3000/`);
});