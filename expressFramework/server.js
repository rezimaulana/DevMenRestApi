const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs')
//app.use(logger)

app.get('/', (req, res) => {
    /* res.send('Test')
    res.sendStatus(500).send('Test')
    res.status(200).json({message: 'Error'})
    res.json({message: 'Error'})
    res.download('server.js')
    */
    res.render('index')
})

const userRouter = require('./routes/users.js')

app.use('/users', userRouter)

app.listen(3000)