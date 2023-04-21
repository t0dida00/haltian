const express = require('express');
const DB = require("./utilities/db")
const app = express();
const session = require('express-session');
const cors = require('cors')

const http = require('http');
const initSocketIo = require('./services/socket');
const server =  http.createServer(app)
const {dataSave} = require("./services/mongoSaver")
const {EmitMessage} = require("./middlewares/middleware")
app.use(express.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));
app.use(cors())

setInterval(dataSave, 30*60*1000);
app.use(express.json());

initSocketIo(server);


const API_PORT = 8081;
const SOCKET_PORT =  8080;

app.use('/set-up', require('./routes/installation'));
app.use('/history', require('./routes/history'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/socket.html');
});



setInterval(EmitMessage,5*60*1000);
app.listen(API_PORT, function () {
  console.log(`API Server running at port ` + API_PORT);
})

server.listen(SOCKET_PORT, () => {
  console.log(`Socket.IO server running at http://localhost:${SOCKET_PORT}/`);
});
