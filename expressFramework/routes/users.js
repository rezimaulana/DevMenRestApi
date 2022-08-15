const { application } = require('express')
const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render('users/new')
    //{firstName: "test"}
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('Error')
        res.render('users/new', {firstName: req.body.firstName})
    }
})

router.route('/:id')
.get((req, res) => {
    console.log(req.user)
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {
    req.params.id
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [{name: 'rezi'}, {name: 'fidya'}]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router