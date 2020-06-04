const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Note = require('../models/note')


router.post('/create-note', (req, res) => {
    const data = req.body

    User.findOne({ token: data.token }, (err, user) => {
        if (user && user.login) {
            const date = new Date()

            data.createdAt = date.toGMTString().split(":")[0] + ":" + date.getMinutes()
            data.author = user._id

            delete data.token

            new Note(data).save(err => {
                if (err) {
                    res.json(err)
                } else {
                    res.json({ success: true })
                }
            })
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router