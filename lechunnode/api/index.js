var express = require('express');
var router = express.Router();
const User = require('./controller/user')

/* GET home page. */
router.post('/login', User.login);//登录界面
router.get('/user',User.user);//获取用户信息
router.post('/user/info',User.info); //判断用户名和验证码，之后登陆
router.get('/user/add',User.add);//获取用户手机号
// router.get('/user/info2', checkToken, User.info);
router.get('/msgCode', User.code);//获取验证码
router.get('/getData',User.data);//获取总数据
router.get('/detail', User.detail);//获取详情页数据
router.get('/mine',User.mine)//获取运货详细数据
router.get('/car',User.car);//获取用户信息中的地址栏参数
module.exports = router;
