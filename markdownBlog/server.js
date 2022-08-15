const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

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

app.listen(5000)