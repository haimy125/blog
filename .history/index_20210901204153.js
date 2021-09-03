const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})