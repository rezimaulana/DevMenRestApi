if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./users')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const users = [
    {id: 1, name: 'User 1'},
    {id: 2, name: 'User 2'},
    {id: 3, name: 'User 3'},
    {id: 4, name: 'User 4'},
    {id: 5, name: 'User 5'},
    {id: 6, name: 'User 6'},
    {id: 7, name: 'User 7'},
    {id: 8, name: 'User 8'},
    {id: 9, name: 'User 9'},
    {id: 10, name: 'User 10'},
    {id: 11, name: 'User 11'},
    {id: 12, name: 'User 12'},
    {id: 13, name: 'User 13'},
    {id: 14, name: 'User 14'},
    {id: 15, name: 'User 15'}
]

const posts = [
    {id: 1, name: 'Posts 1'},
    {id: 2, name: 'Posts 2'},
    {id: 3, name: 'Posts 3'},
    {id: 4, name: 'Posts 4'},
    {id: 5, name: 'Posts 5'},
    {id: 6, name: 'Posts 6'},
    {id: 7, name: 'Posts 7'},
    {id: 8, name: 'Posts 8'},
    {id: 9, name: 'Posts 9'},
    {id: 10, name: 'Posts 10'},
    {id: 11, name: 'Posts 11'},
    {id: 12, name: 'Posts 12'},
    {id: 13, name: 'Posts 13'},
    {id: 14, name: 'Posts 14'},
    {id: 15, name: 'Posts 15'}
]

app.get('/posts', paginatedResults(posts), (req, res) =>{
    res.json(res.paginatedResults)
})

app.get('/users', paginatedResults(users), (req, res) =>{
    res.json(res.paginatedResults)
})

function paginatedResults(model) {
    return(req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {}

        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }

        results.results = model.slice(startIndex, endIndex)

        res.paginatedResults = results
        next()
    }
}

app.listen(3000)