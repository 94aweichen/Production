
var express = require('express');
var router = express.Router();

require('./core/HttpWrapper');
require('./core/SqlClient');
require('./cms/model');

/* GET gpt4 listing.
*  app.js 中注册路由配置代码 app.use('/gpt4', gpt4);
*  所以在请求用户的任何路径前都要添加 /gpt4 开始；
*/

var sqlClient = new SqlClient();//数据库访问对象

router.get('/', function(req, res, next) {
	
    //从数据库读取数据
	var gpt4 = new Gpt4();
	var gpt4_arr = [];
	sqlClient.query(gpt4,function(result){
		if(result != null && result.length > 0){
            gpt4_arr = result;
		}
		res.render('gpt4Index', {cur_nav:'gpt4_mng', content: '您当前现在在用户主页！', gpt4_arr:gpt4_arr, name: req.session.user });
	});
	
});

//添加用户
router.get('/create', function(req, res, next) {
    res.render('gpt4Merge', {cur_nav:'gpt4_mng', name: req.session.user});
});

//保存用户
router.post('/create', function(req, res, next) {
	//保存数据到数据库
	var gpt4 = new Gpt4();
	HttpWrapper.wrapReqParams(req,gpt4);//转换参数到对象
	console.log(gpt4.sn);
	sqlClient.create(gpt4,function(result){//创建
		res.redirect('/gpt4/');
	});
});

//删除用户
router.get('/delete', function(req, res, next) {
	var delGpt4 = new Gpt4();
	delGpt4.id = req.query.id;
	sqlClient.deleteById(delGpt4,function(result){
		res.redirect('/gpt4/');
	});
});

var page_count = 20;//分页条数
router.get('/getgpt4json', function (req, res) {
    var ret = [];//返回的分页json初始化
    if (req.query.page) {//判断是否有get参数page
        if (parseInt(req.query.page) >= 0) {//
            for (var i = 0; i < page_count; i++) {//遍历获取
                ret[ret.length] = vdo_info_ls[parseInt(req.query.page) * page_count + i];
            }
        }
    }
    res.json(ret);//返回json
});

router.post('/postgpt4json', function (req, res, next) {
    if (req.body.sn && req.body.pn) {//判断是否有get参数page
        var gpt4 = new Gpt4();
        var gpt4_arr = [];

        HttpWrapper.wrapReqParams(req,gpt4);//转换参数到对象
        sqlClient.getBySN(gpt4,function(result){   // 同理 /login 路径的处理方式
            if(result != null && result.length > 0){
                console.log("SN已存在！返回json错误值");
                gpt4_arr = result;
                res.json({result:1});
            }else{
                sqlClient.create(gpt4,function(result){//创建
                    if(result){
                        console.log("记录成功！返回json成功值");
                        res.json({result:0});
                    }else{
                        console.log("记录失败！返回json错误值");
                        res.json({result:2});
                    }
                });
            }
        });
    }
});

module.exports = router;
