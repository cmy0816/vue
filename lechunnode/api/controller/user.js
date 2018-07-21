const User = require('../model/UserMysql');
// const jwt = require('jsonwebtoken');
const login =async (req,res,next)=>{
    const {mobile,code} = req.body;
    if (req.cookies.msgcode == code) {
        const userInfo = await User.userInfo({
            mobile
        });
        if(userInfo){
            res.json({
                name:'登陆成功',
                main:userInfo
            })
        }else{
            res.json({
                main:'服务器繁忙'
            })
        }
    }
    else{
        res.json({
            code:0,
            message:'验证码错误'
        })
    }
};
const code = (req,res,next)=>{
    const mobile = req.query.mobile;
    const message = parseInt(Math.random() * 1000000);
    res.cookie('msg',message,{maxAge:1000*60*60*60});
    return res.json({
        code:1,
        msg:`本次输入的手机号为${mobile},验证码为${message}`
    });
}

const info = async (req,res,next) => {
    const {mobile,code} = req.body;
    const userInfo = await User.userInfo({
        mobile
    });
    if(req.cookies.msg === code){
        return res.json({
                code:1,
                data:userInfo
            });
    }
    
}
const data = async (req,res,next) => {
    const getData = await User.getData();
    res.json({
        code:1,
        data:getData
    })
}
const detail = async (req,res,next)=>{
    let id = req.query.id;
    const getDetail = await User.getDetail(id);
    res.json({
        code:1,
        data:getDetail
    })
}
const user = async (req,res,next) => {
    let tem = req.query.tem;
    const data = await User.getUser(tem);
    res.json({
        code:1,
        data:data
    })
}
const add = async (req,res,next) => {
    let id = req.query.id;
    const tel = await User.getAdd(id);
    res.json({
        code:1,
        data:tel
    });
}
const mine = async (req,res,next) => {
    let id = req.query.id;
    const tel = await User.getMine(id);
    res.json({
        code: 1,
        data: tel
    });
}
module.exports = {
    code,login,info,data,detail,user,add,mine
}