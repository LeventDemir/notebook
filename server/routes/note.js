const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Note = require('../models/note')
const List = require('../models/list')
const auth = require('../middleware/auth')


router.post('/create', auth, (req, res) => {
    const data = req.body
    const date = new Date()
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    data.author = author
    data.createdAt = date.toGMTString().split(":")[0] + ":" + date.getMinutes()

    if (data.list) {
        List.findOne({ _id: data.list, author }, (err, list) => {
            if (list) {
                delete data.token
                delete data.list
                delete data.author

                list.notes.unshift(data)

                list.save(err => {
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
    } else {
        new Note(data).save(err => {
            if (!err) {
                res.json({ success: true })
            } else {
                res.json({ success: false })
            }
        })
    }
})


router.post('/update', auth, (req, res) => {
    const data = req.body
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    if (data.list && data.index) {
        List.findOne({ _id: data.list, author }, (err, list) => {
            if (list && list.notes.length  > +data.index && +data.index > -1) {
                const note = {
                    note: data.note,
                    createdAt: list.notes[data.index].createdAt
                }

                list.notes.splice(+data.index, +data.index + 1, note)

                list.save(err => {
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
    } else {
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
    }
})


router.post('/delete', auth, (req, res) => {
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


router.get('/note', auth, (req, res) => {
    const data = req.query
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    Note.find({ _id: data.id, author }, (err, note) => {
        if (note) {
            res.json(note)
        } else {
            res.json({ success: false })
        }
    })
})


module.exports = router