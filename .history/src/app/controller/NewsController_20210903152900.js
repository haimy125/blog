class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    };
    //[GET] /news/:slug 
    //slug la bien dong
    show() {

    }
};



module.exports = new NewsController; //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do