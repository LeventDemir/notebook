const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Note = require('../models/note')
const auth = require('../middleware/auth')


router.post('/create-note', auth, (req, res) => {
    const data = req.body

    const date = new Date()

    data.createdAt = date.toGMTString().split(":")[0] + ":" + date.getMinutes()

    new Note(data).save(err => {
        if (!err) {
            res.json({ success: true })
        } else {
            res.json({ success: false })
        }
    })
})


router.post('/update-note', auth, (req, res) => {
    const data = req.body

    Note.findOne({ _id: data.id, author: data.author }, (err, note) => {
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
})


router.post('/delete-note', auth, (req, res) => {
    const data = req.body

    Note.findOne({ _id: data.id, author: data.author }, (err, note) => {
        if (note) {
            note.remove(err => {
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


router.get('/notes', auth, (req, res) => {
    const data = req.query

    Note.find({ author: data.author }, (err, notes) => {
        if (notes) {
            res.json(notes)
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router