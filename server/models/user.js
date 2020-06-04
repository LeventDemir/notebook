const mongoose = require('mongoose')


const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    login: {
        type: Boolean,
        required: true
    },
    token: {
        type: String,
        required: true,
        unique: true
    }
})


module.exports = mongoose.model('User', User);