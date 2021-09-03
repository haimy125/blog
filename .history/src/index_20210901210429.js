const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined')) //dung de xem chi tiet request

app.get('/', (req, res) => {
    res.send(`<h1>hello world</h1>`)
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`)
})