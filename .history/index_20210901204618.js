const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})