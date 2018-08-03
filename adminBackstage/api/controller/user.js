const User = require('../mysql/index.js');
const signIn = async (req,res,next)=>{
    const {user,pwd} = req.body;
    const msg = await User.signIn({
        user,pwd
    });
    if(msg.length){
    res.cookie('user',user);
    res.json({
        code: 1,
        msg
    })
    }else{
    res.json({
        code: 0,
        msg: '用户名或密码错误'
    })
    }
}
const allData = async (req,res,next) => {
    const {page,pageSize} = req.query;
    console.log(page, pageSize);
    const data = await User.getData({
        page, pageSize
    });
    res.json({
        code:1,
        data
    })
}
module.exports = {
    signIn,
    allData
}