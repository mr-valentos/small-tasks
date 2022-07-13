const mongoose = require('mongoose');
const Todo = require('./Todo')

mongoose.connect("mongodb://mongo:mongo@localhost:27017/mongo?authSource=admin", () => console.log('conected db'))

module.exports.addNewTodo = async function addNewTodo({text, id}) {
    try {
        const todo = new Todo({text,complited: true,id});
        return todo.save()
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.deleteTodo = async function deleteTodo() {
    const todo = await Todo.deleteOne()
    console.log(todo)
}

// deleteTodo()