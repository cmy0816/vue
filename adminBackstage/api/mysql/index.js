const cont = require('../db/concent');
const signIn = ({user,pwd})=>{
    const sql = 'select * from user where user=? and pwd=?';
    return new Promise((reslove,reject)=>{
        cont.query(sql,[user,pwd],(err,res)=>{
            if(err){
                return reject();
            }
            reslove(res);
        })
    })
}
module.exports = {
    signIn
}