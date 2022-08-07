const express = require('express')
const router = express.Router()

//get one
router.get('/', (req, res) => {
    res.send('Hello, World!')
})

//get all
router.get('/:id', (req, res) => {
    
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