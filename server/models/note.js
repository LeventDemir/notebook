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
        require: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})


module.exports = mongoose.model('Note', Note)