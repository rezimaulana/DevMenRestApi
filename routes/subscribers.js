const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subsribers')

//get all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({message: err.message})
        //it means error in our server, entirely our fault
    }
})

//get one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

//create one
router.post('/', (req, res) => {
    
})

//update one
//patch update half
//put update all
router.patch('/:id', (req, res) => {
    
})

//delete one
router.delete('/:id', (req, res) => {
    
})

module.exports = router