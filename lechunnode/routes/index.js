var express = require('express');
var router = express.Router();
const url = require('url');
const mysql = require('mysql');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/api/msgCode', function (req, res, next) {
//   res.json({
//     code:1
//   })
// });

// router.get('/user/info',function(req,res,next){
//   res.json({
//     name:'程梦雅',
//     age:'18'
//   });
//   next();
// });
// router.get('/tel', function (req, res, next) {
//   let tel = url.parse(req.url,true).query.tel;
//   let message = parseInt(Math.random()*1000000);
//   var mysql = require('mysql');
//   var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     database: 'lechun'
//   });
//   connection.connect();
//   connection.query('select * from user', function (err, result) {
//     console.log(result);
//   });
//   res.json({
//     name: '手机号是',
//     tel: tel,
//     message: message
//   });
//   next();
// })
module.exports = router;
