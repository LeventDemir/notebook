const mongoose = require('mongoose')


const Note = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    note: {
        type: String,
        required: true
    },
    list: {
        type: String
    },
    createdAt: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Note', Note)