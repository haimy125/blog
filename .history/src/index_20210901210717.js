const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
//HTTP Logger
app.use(morgan('combined')); //dung de xem chi tiet request

// Template engine
app.engine('handlebars', handlebars());


app.get('/', (req, res) => {
    res.send(`<h1>hello world</h1>`);
})

app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
})