class SiteController {
    //[GET] /
    index(req, res) {
        res.render('home');
    };

    //[GET] /search
    search(req, res) {
        res.send('seach');
    };
};



module.exports = new NewsController; //exports de qua kia require. khi exports cai gi thi ben kia nhan duoc require cai do