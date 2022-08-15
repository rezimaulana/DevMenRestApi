const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test Decription'
    }]
    res.render('index', {articles: articles})
})

app.listen(5000)