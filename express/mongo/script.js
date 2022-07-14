const mongoose = require('mongoose');
const Todo = require('./Todo')

mongoose.connect("mongodb://mongo:mongo@localhost:27017/mongo?authSource=admin", () => console.log('conected db'))

module.exports.addNewTodo = async function addNewTodo(text) {
    try {
        const todo = new Todo({text});
        return todo.save()
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.getAllTodo = async function getAllTodo() {
    try {
        return Todo.find()
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.deleteTodo = async function deleteTodo(id) {
    const todo = await Todo.deleteOne({_id: id})
    console.log(todo)
}

module.exports.onComplite = async function onComplite(id, complited) {
    const todo = await Todo.updateOne({_id: id}, {complited: !complited})
    console.log(todo)
}

// deleteTodo()