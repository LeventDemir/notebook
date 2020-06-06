const mongoose = require('mongoose')


const List = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    notes: {
        type: Array
    }
})


module.exports = mongoose.model('List', List)