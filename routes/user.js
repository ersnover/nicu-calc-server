const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const saltRounds = 10

const jwt = require('jsonwebtoken')

const models = require('../models')

//  register new user
router.post('/register', (req,res) => {
    let username = req.body.username
    let password = req.body.password

    bcrypt.hash(password, saltRounds, (error, hash) => {
        if (error) {
            res.json({error: error})
        } else {
            models.User.findOrCreate({where: {username: username}, defaults: {password: hash}})
            .then(([user, created]) => {
                if (created) {
                    const token = jwt.sign({username: username}, process.env.PRIVATE_KEY)
                    res.json({token: token, userid: user.id, username: username})
                } else {
                    res.json({error: 'Username not available'})
                }
            })
        }
    })
})

// login existing user

router.post('/login', (req,res) => {
    let username = req.body.username
    let password = req.body.password

    models.User.findOne({where: {username: username}})
    .then(user => {
        if (user) {
            // username exists in database
            bcrypt.compare(password, user.password, (error, result) => {
                if (result) {
                    // password correct
                    const token = jwt.sign({username: username}, process.env.PRIVATE_KEY)
                    res.json({token: token, userid: user.id, username: username})
                } else {
                    // password incorrect
                    res.json({error: 'Incorrect username and/or password'})
                }
            })
        } else {
            // username not in database
            res.json({error: 'Incorrect username and/or password'})
        }
    })
})

// delete user account

router.post('/delete', (req,res) => {
    let userid = req.body.userid
    let password = req.body.password

    models.User.findOne({where: {id: userid}})
    .then(user => {
        if (user) {
            // username exists in database
            bcrypt.compare(password, user.password, (error, result) => {
                if (result) {
                    // password correct
                    models.User.destroy({force: true, where: {id: userid}})
                    .then(result => {
                        if (result === 1) {
                            res.json({success: true})
                        } else {
                            res.json({error: 'Database Error: Unable to delete user'})
                        }
                    })
                } else {
                    // password incorrect
                    res.json({error: 'Incorrect password'})
                }
            })
        } else {
            // username not in database
            res.json({error: 'Authentication Error: Unable to delete user'})
        }
    })


})

module.exports = router