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
const test = require('./src/fs');
const mongo = require('./mongo/script');

app.use(cors());
app.use(express.json());

// app.post('/', function (req, res) {
//   res.json(req.body);
//   mongo.addNewTodo()
// });

app.get('/', async function(req, res,){
  const todoList = await mongo.getAllTodo() 
    res.send(todoList)
  
});

io.on('connection', async (socket) => {
  console.log('conected');

  socket.on('newTodo', async text => {
    const todo = await mongo.addNewTodo(text)
    io.emit('newTodo', todo)
  })

  socket.on('changeStatusOfAll', async data => {
    await mongo.completeAll(data)
    io.emit('changeStatusOfAll', data)
  })
  
  socket.on('deleteTask', async data => {
    await mongo.deleteTodo(data)
    io.emit('deleteTask', data)
  })

  socket.on('changeStatus', async ({id, complited}) => {
    await mongo.onComplete(id, complited)
    io.emit('changeStatus', id)
  })

  socket.on('editTask', async ({id, text}) => {
    await mongo.editTodo(id, text)
    io.emit('editTask', {id, text})
  })

  socket.on('delCompleted', async data => {
    await mongo.deleteCompleted()
    io.emit('delCompleted', data)
  })
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
