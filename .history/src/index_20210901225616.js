const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
//HTTP Logger
app.use(morgan('combined')); //dung de xem chi tiet request

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs' //cau hinh thay doi cham duoi handlebars
})); //dinh nghia handlebars
app.set('view engine', 'hbs'); //set handlebars
app.set('views', path.join(__dirname, 'resources/views')); //handlebars de lam layout.

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});





app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});