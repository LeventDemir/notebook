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

            new Note(data).save(err => {
                if (!err) {
                    res.json({ success: true })
                } else {
                    res.json({ success: false })
                }
            })
        } else {
            res.json({ success: false })
        }
    })
})


router.post('/update-note', (req, res) => {
    const data = req.body

    User.findOne({ token: data.token }, (err, user) => {
        if (user && user.login) {
            Note.findOne({ author: user._id, _id: data.id }, (err, note) => {
                if (note) {
                    note.photo = data.photo
                    note.note = data.note

                    note.save(err => {
                        if (!err) {
                            res.json({ success: true })
                        } else {
                            res.json({ err })
                        }
                    })
                } else {
                    res.json({ success: false })
                }
            })
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router