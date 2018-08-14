var express = require('express');
var router = express.Router();
const user = require('./controller/user');
/* GET home page. */
router.post('/signIn', user.signIn);
router.get('/allData',user.allData);
router.get('/setState',user.setState);
router.get('/remove', user.remove);
const load = require('./middleware/load');//上传的中间件
router.post('/loaddown', load.single('file'), user.loaddown); //图片的上传接口
module.exports = router;
