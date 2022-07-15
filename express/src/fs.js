// module.exports.hello = 'Hello World!';
// const { rejects } = require('assert');
// const fs = require('fs/promises');
// const fsSync = require('fs');
// const {resolve} = require('path');
// const {promisify} = require('util');

// module.exports.todolist = () => fs.readFileSync(resolve(__dirname, 'test.json'))

// const readFile = promisify(fs.readFile);

// fs.readFile(resolve(__dirname, 'test.json'))
//     .then(function(data){
//         module.exports.todolist = data.toString();
//     })
//     .catch(function(err){
//         console.error(err)
//     })

// module.exports.todolistF = function() {
//     return fs.readFile(resolve(__dirname, 'todolist.json'))
//     .then(function(data){
//         return data.toString();
//     })
//     .catch(function(err){
//         console.error(err)
//     })
// } 


// function writeTodosP(newTodoList) {
//     fsSync.rmSync(resolve(__dirname, 'todolist.json'));
    
//     return new Promise((res, rej) => {
//         fsSync.writeFileSync(resolve(__dirname, 'todolist.json'), '')
//         fs.writeFile(resolve(__dirname, 'todolist.json'), JSON.stringify(newTodoList))
//         .then(res(console.log('success'))) 
//         .catch(function(err){
//             rej(console.error(err))   
//         })
//     })
// } 


// module.exports.writeTodos = writeTodosP


