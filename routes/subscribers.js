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
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
    //status 201 = successfully created an object
    //status 200 = everything was successfull
    //status 400 =  bad data from client something wrong with user input not something wrong on server
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