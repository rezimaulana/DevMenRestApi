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
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber.name)
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

async function getSubscriber(req, res, next) {
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber==null){
            return res.status(404).json({message: 'Cannot find subscriber'})
            //status 404 = could not find something match
        }
    } catch(err) {
        return res.status(500).json({message: err.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports = router