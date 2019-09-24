const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')

const models = require('../models')

// get all babies for Doc

router.post('/all', (req,res) => {
    let docId = req.body.docId

    models.Baby.findAll({where: {docId: docId}})
    .then(babies => babies[0] ? res.json({babies: babies}) : res.json({message: 'No babies to display'}))
})

// new Baby

router.post('/baby', (req,res) => {
    let docId = req.body.docId
    let roomNum = req.body.roomNum
    let birthDate = req.body.birthDate
    let birthWeight = req.body.birthWeight
    let gestAge = req.body.gestAge

    models.Baby.create({
        roomNum: roomNum,
        birthDate: birthDate,
        birthWeight: birthWeight,
        gestAge: gestAge,
        docId: docId
    })
    .then(baby => {
        res.json({baby: baby})
    })
})

// update baby

router.patch('/baby', (req,res) => {
    let babyId = req.body.babyId
    let docId = req.body.docId
    let updateBaby = req.body.baby
    models.Baby.update(updateBaby, {where: {id: babyId, docId: docId}})
    .then(rowsUpdated => {
        // response is #rowsUpdated
        if (rowsUpdated.length > 0) {
            models.Baby.findOne({where: {id: babyId}})
            .then(baby => baby ? res.json({baby: baby}) : res.json({error: "Unable to fetch baby"}))
        } else {
            res.json({error: 'Could not update baby'})
        }
    })
})

// DESTROY BABY

router.delete('/baby', (req,res) => {
    let babyId = req.body.babyId
    let userId = req.body.userId
    let password = req.body.password

    models.User.findOne({where: {id: userId}})
    .then(user => {
        if (user) {
            // username exists in database
            bcrypt.compare(password, user.password, (error, result) => {
                if (result) {
                    // password correct
                    models.Baby.destroy({where: {id: babyId}})
                    .then(result => {
                        if (result === 1) {
                            res.json({success: true})
                        } else {
                            res.json({error: 'Database Error: Unable to delete baby'})
                        }
                    })
                } else {
                    // password incorrect
                    res.json({error: 'Incorrect password'})
                }
            })
        } else {
            // username not in database
            res.json({error: 'Authentication error: Unable to delete baby'})
        }
    })
})

module.exports = router