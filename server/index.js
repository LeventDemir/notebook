const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const user = require('./routes/user')
const note = require('./routes/note')


mongoose.connect('mongodb://localhost/notebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on("open", () => console.log("✔ Connected to mongodb"));
mongoose.connection.on("error", err => console.log(err));


app.use(bodyParser.json())
app.use('/user', user)
app.use('/note', note)


module.exports = app