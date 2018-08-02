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
module.exports = {
    signIn
}