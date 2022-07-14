const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: String,
    complited: {
        type: Boolean,
        default: false,
    },
    // id: String
})

module.exports = mongoose.model('Todo', todoSchema)