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
    const data = await User.getData({
        page, pageSize
    });
    res.json({
        code:1,
        data
    })
}
const setState = async (req,res,next) => {
    const {id,state} = req.query;
    const data = await User.setState({id,state});
    res.json({
        code:1,
        data
    })
}
const remove = async (req, res, next) => {
    const {
        id
    } = req.query;
    const data = await User.remove({
        id
    });
    res.json({
        code: 1,
        data
    })
}
const loaddown = (req, res, next) => {
    if (req.file) {
        res.json({
            code: 1,
            url: 'http://' + req.headers.host.split(':')[0] + ':3000/upload/' + req.file.filename
        })
    }
}
module.exports = {
    signIn,
    allData,
    setState,remove,loaddown
}