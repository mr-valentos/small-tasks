const mongoose = require('mongoose');
const Todo = require('./Todo')

mongoose.connect("mongodb://mongo:mongo@localhost:27017/mongo?authSource=admin", () => console.log('conected db'))

module.exports.addNewTodo = async (text) => {
    try {
        const todo = new Todo({text});
        return todo.save()
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.getAllTodo = async () => {
    try {
        return Todo.find()
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.deleteTodo = async (id) => {
    try {
        await Todo.deleteOne({_id: id})
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.onComplete = async (id, complited) => {
    try {
        await Todo.updateOne({_id: id}, {complited: !complited})
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.completeAll = async (complited) => {
    try {
        await Todo.updateMany({complited: !complited}, {complited: complited})
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.editTodo = async (id, text) => {
    try {
        await Todo.updateOne({_id: id}, {text})
    } catch (e) {
        console.error(e.message)
    }
}

module.exports.deleteCompleted = async () => {
    try {
        await Todo.deleteMany({complited: true})
    } catch (e) {
        console.error(e.message)
    }
}

// deleteTodo()