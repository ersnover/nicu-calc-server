const express = require('express')
const router = express.Router()

const models = require('../models')

// get all weights for baby

router.post('/all', (req,res) => {
    let babyId = req.body.babyId

    models.Weight.findAll({where: {babyId: babyId}})
    .then(weights => weights[0] ? res.json({weights: weights}) : res.json({message: 'No weights to display'}))
})

// new Weight

router.post('/', (req,res) => {
    let babyId = req.body.babyId
    let date = req.body.date
    let weight = req.body.weight
    let deltaDay = req.body.deltaDay
    let deltaBirthWeight = req.body.deltaBirthWeight
    let avg7day = req.body.avg7day

    models.Weight.create({
        babyId: babyId,
        date: date,
        weight: weight,
        deltaDay: deltaDay,
        deltaBirthWeight: deltaBirthWeight,
        avg7day: avg7day
    })
    .then(weight => {
        res.json({weight: weight})
    })
})

// update weight

router.patch('/', (req,res) => {
    let weightId = req.body.weightId
    let updateWeight = req.body.weight
    models.Weight.update(updateWeight, {where: {id: weightId}})
    .then(rowsUpdated => {
        // response is #rowsUpdated
        if (rowsUpdated.length > 0) {
            models.Weight.findOne({where: {id: weightId}})
            .then(weight => weight ? res.json({weight: weight}) : res.json({error: "Unable to fetch weight"}))
        } else {
            res.json({error: 'Could not update weight'})
        }
    })
})

// DESTROY weight

router.delete('/', (req,res) => {
    let weightId = req.body.weightId

    models.Baby.destroy({where: {id: babyId}})
    .then(result => {
        if (result === 1) {
            res.json({success: true})
        } else {
            res.json({error: 'Database Error: Unable to delete weight'})
        }
    })
})

module.exports = router