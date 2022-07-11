const express = require('express')
const app = express()
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
});

const cors = require('cors');
const port = 3001;
const test = require('./src/fs')

app.use(cors());
app.use(express.json())

app.post('/', function (req, res) {
  res.json(req.body);
  test.writeTodos(req.body)
});

app.get('/', function(req, res,){
  test.todolistF() 
  .then (data => res.send(data));
  
});

io.on('connection', (socket) => {
  console.log('conected');

  socket.on('newTodo', ({text, id}) => io.emit('newTodo', {text, id}))
  socket.on('changeStatusOfAll', data => io.emit('changeStatusOfAll', data))
  socket.on('deleteTask', data => io.emit('deleteTask', data))
  socket.on('changeStatus', data => io.emit('changeStatus', data))
  socket.on('editTask', ({id, text}) => io.emit('editTask', {id, text}))
  socket.on('delCompleted', data => io.emit('delCompleted', data))
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
