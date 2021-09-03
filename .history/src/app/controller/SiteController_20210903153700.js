class SiteController {
    //[GET] /
    index(req, res) {
        res.render('news');
    };

    //[GET] /search
    search(req, res) { //tuong tu nhu trang chi tiet cua news
        res.send('news detail');
    };
};



module.exports = new NewsController; //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do