const User = require('../models/user')


module.exports = (req, res, next) => {
    const token = req.query.token || req.body.token

    User.findOne({ token }, (err, user) => {
        if (user && user.login) {
            next()
        } else {
            res.json({ permission: false })
        }
    })
} 