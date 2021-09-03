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
app.use(express.urlencoded({
    extended: true
})); //= app.use(bodyParser.urlencoded());
app.use(express.json());
//XMLHttpRequest, fetch, axios, v..v.. thì đều được sd để gửi dữ liệu lên sv ngoài submit của form. nên phải khai báo thư viện như json để xử lý
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
    // console.log(req.query.q);//lay parameter tren url qua name cua thuoc tinh
    res.render('news');
});

app.get('/search', (req, res) => {
    // console.log(req.query.q); //cach de lay duoc tham so parameter truyen tren browser
    res.render('search');
});

app.post('/search', (req, res) => {
    //form data hay phương thức post thì dùng body để lấy. 
    //còn get thì dùng query 
    console.log(req.body);
    res.send('');
});





app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});