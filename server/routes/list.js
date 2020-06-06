const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const auth = require('../middleware/auth')
const List = require('../models/list')


router.post('/create-list', auth, (req, res) => {
    const data = req.body

    data.author = jwt.verify(data.token, 'SeCrEtKeY').author

    new List(data).save(err => {
        if (!err) {
            res.json({ success: true })
        } else if (err.code == 11000) {
            res.json({ exist: true })
        }
        else {
            res.json({ success: false })
        }
    })
})


router.post('/update-list', auth, (req, res) => {
    const data = req.body
    const author = jwt.verify(data.token, 'SeCrEtKeY').author

    List.findOne({ _id: data.id, author }, (err, list) => {
        if (list) {
            list.name = data.name

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
})


module.exports = router