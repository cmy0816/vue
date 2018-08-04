var express = require('express');
var router = express.Router();
const user = require('./controller/user');
/* GET home page. */
router.post('/signIn', user.signIn);
router.get('/allData',user.allData);
router.get('/setState',user.setState);
router.get('/remove', user.remove);
module.exports = router;
