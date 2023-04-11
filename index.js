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

setInterval(dataSave, 5*60*1000);
app.use(express.json());


app.use(EmitMessage);

app.use('/set-up', require('./routes/installation'));
app.use('/history', require('./routes/history'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/socket.html');
});


initSocketIo(server);
const PORT = 3000

app.listen(3001, function () {
  console.log(`API Server running at port ` + 3001);
})

server.listen(PORT, () => {
  console.log(`Socket.IO server running at http://localhost:3000/`);
});