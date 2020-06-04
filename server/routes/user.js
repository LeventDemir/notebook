const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')


// create token
const createToken = () => {
    const letters = [...Array(52).keys()].map(i =>
        i > 25 ? String.fromCharCode(i + 71) : String.fromCharCode(i + 65)
    );

    let token = "";

    for (let x = 0; x < 100; x++) {
        token += letters[Math.floor(Math.random() * letters.length)];
    }

    return token;
}


router.post('/register', (req, res) => {
    const data = req.body

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);

    data.password = hash
    data.token = createToken()
    data.login = false

    User.findOne({ username: data.username }, (err, user) => {
        if (user) {
            res.json({ exist: true })
        } else {
            new User(data).save(err => {
                if (!err) {
                    res.json({ success: true })
                } else {
                    res.json({ success: false })
                }
            })
        }
    })
})


router.post('/login', (req, res) => {
    const data = req.body

    User.findOne({ username: data.username }, (err, user) => {
        if (user) {
            if (bcrypt.compareSync(data.password, user.password)) {
                if (user.login) {
                    res.json({ token: user.token })
                } else {
                    user.token = createToken()
                    user.login = true

                    user.save(err => {
                        if (!err) {
                            res.json({ token: user.token })
                        } else {
                            res.json({ success: false })
                        }
                    })
                }
            } else {
                res.json({ success: false })
            }
        } else {
            res.json({ success: false })
        }
    })
})


router.post('/logout', (req, res) => {
    const data = req.body

    User.findOne({ token: data.token }, (err, user) => {
        if (user) {
            user.login = false

            user.save(err => {
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