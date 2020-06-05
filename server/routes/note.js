const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Note = require('../models/note')
const auth = require('../middleware/auth')


router.post('/create-note', auth, (req, res) => {
    const data = req.body

    const date = new Date()

    data.author = jwt.verify(data.token, 'SeCrEtKeY').author
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
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    Note.findOne({ _id: data.id, author }, (err, note) => {
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
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    Note.findOne({ _id: data.id, author }, (err, note) => {
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
    const author = jwt.verify(req.query.token, 'SeCrEtKeY').author

    Note.find({ author }, (err, notes) => {
        if (notes) {
            res.json(notes)
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router