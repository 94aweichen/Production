var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user){
        res.render('index', {cur_nav:'home', title: '生产数据管理系统', name: req.session.user });
    }else{
        res.redirect('/login');
    }
});

module.exports = router;
