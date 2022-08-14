const express = require('express')
const app = express()

const users = [
    {name: 'Rezi'}
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(3000)