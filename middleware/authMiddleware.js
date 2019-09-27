const jwt = require('jsonwebtoken')
const models = require('../models')

const authenticate = (req,res,next) => {
    console.log('middleware called...')
    let headers = req.headers['authorization']
    console.log(headers)

    if (headers) {
        const token = headers.split(' ')[1]
        var decoded = jwt.verify(token, process.env.PRIVATE_KEY)
        if (decoded) {
            const username = decoded.username
            models.User.findOne({where: {username: username}})
            .then(user => user ? next() : res.json({error: 'Invalid Credentials'}))
        } else {
            res.json({error: 'Unauthorized Access'})
        }
    } else {
        res.json({error: 'Authorization header not found'})
    }
}

module.exports = authenticate