require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Decription'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Decription 2'
    }]
    res.render('articles/index', {articles: articles})
})

app.use('/articles', articleRouter)

const PORT = process.env.PORT || 4111;
app.listen(PORT, () => console.log('Server Started'))