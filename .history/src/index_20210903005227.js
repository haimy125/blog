const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public'))); //xu ly duong dan cac file tinh nam trong public
// "watch": "node-sass --watch src/resources/scss/app.scss src/public/css/app.css",
//HTTP Logger
// app.use(morgan('combined')); //dung de xem chi tiet request

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
    // console.log(req.query.q);
    res.render('news');
});

app.get('/search', (req, res) => {
    // console.log(req.query.q); //cach de lay duoc tham so parameter truyen tren browser
    res.render('search');
});

app.post('/search', (req, res) => {
    // console.log(req.query.q); //cach de lay duoc tham so parameter truyen tren browser
    res.send('');
});





app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});