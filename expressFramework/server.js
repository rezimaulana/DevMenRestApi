const express = require('express')
const app = express()

app.get('/', (req, res) => {
    /* res.send('Test')
    res.sendStatus(500).send('Test')
    res.status(200).json({message: 'Error'})
    res.json({message: 'Error'})
    res.download('server.js')
    */
    
})

app.listen(3000)