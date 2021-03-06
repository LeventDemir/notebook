const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const user = require('./routes/user')
const note = require('./routes/note')
const list = require('./routes/list')


mongoose.connect(process.env.DB || 'mongodb://localhost/notebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.on("open", () => console.log("✔ Connected to mongodb"));
mongoose.connection.on("error", err => console.log({ mongooseError: err }));


app.use(bodyParser.json({ limit: '6mb' }))
app.use('/user', user)
app.use('/note', note)
app.use('/list', list)


module.exports = app