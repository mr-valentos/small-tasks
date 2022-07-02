const express = require('express')
const app = express()
const cors = require('cors');
const port = 3001;
const test = require('./src/test')
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.post('/', function (req, res) {
  res.json(req.body);
  // module.exports.test.newTodos = req.body;
  test.writeTodos(req.body)
});

app.get('/', function(req, res,){
  test.todolistF() 
  .then (data => res.send(data));
  
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// useEffect(() => {
    //     fetch('http://localhost:3001/',{method: 'GET'})
    //     .then(res => res.json())
    //     .then(list => console.log(list)
    //         // let {text} = item
    //         // dispatch(addTask({text}))
    //         )
    // },[])