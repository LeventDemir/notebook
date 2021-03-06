const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Note = require('../models/note')
const auth = require('../middleware/auth')


router.post('/create', auth, (req, res) => {
    const data = req.body
    const date = new Date()

    data.author = jwt.verify(data.token, 'SeCrEtKeY').author
    const minutes = date.getMinutes() < 10 ? 0 + "" + date.getMinutes() : date.getMinutes()
    data.createdAt = date.toGMTString().split(", ")[1].split(":")[0] + ":" + minutes

    new Note(data).save(err => {
        if (!err) res.json({ success: true })

        else res.json({ success: false })
    })
})


router.post('/update', auth, (req, res) => {
    const data = req.body
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    Note.findOne({ _id: data.id, author }, (err, note) => {
        if (note) {
            note.photo = data.photo
            note.note = data.note
            note.list = data.list

            note.save(err => {
                if (!err) res.json({ success: true })

                else res.json({ err })
            })
        } else res.json({ success: false })
    })
})


router.post('/delete', auth, (req, res) => {
    const data = req.body
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    Note.findOne({ _id: data.id, author }, (err, note) => {
        if (note) {
            note.remove(err => {
                if (!err) res.json({ success: true })

                else res.json({ success: false })
            })
        } else res.json({ success: false })
    })
})


router.get('/notes', auth, (req, res) => {
    const author = jwt.verify(req.query.token, 'SeCrEtKeY').author

    Note.find({ author }, (err, notes) => {
        if (notes) res.json({ notes })

        else res.json({ success: false })
    }).sort({ $natural: -1 })
})


module.exports = router