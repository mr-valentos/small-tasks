// module.exports.hello = 'Hello World!';
const { rejects } = require('assert');
const fs = require('fs/promises');
const {resolve} = require('path');
const {promisify} = require('util');

// module.exports.todolist = () => fs.readFileSync(resolve(__dirname, 'test.json'))

// const readFile = promisify(fs.readFile);

// fs.readFile(resolve(__dirname, 'test.json'))
//     .then(function(data){
//         module.exports.todolist = data.toString();
//     })
//     .catch(function(err){
//         console.error(err)
//     })

module.exports.todolistF = function() {
    return fs.readFile(resolve(__dirname, 'test.json'))
    .then(function(data){
        return data.toString();
    })
    .catch(function(err){
        console.error(err)
    })
} 


function writeTodosP(newTodoList) {
    return new Promise((res, rej) => {
        fs.writeFile(resolve(__dirname, 'test.json'), JSON.stringify(newTodoList))
        .then(res(console.log('success'))) 
        .catch(function(err){
            rej(console.error(err))   
        })
    })
} 


module.exports.writeTodos = writeTodosP


