const cont = require('../db/concent');
const signIn = ({user,pwd})=>{
    const sql = 'select * from admin where user=? and pwd=?';
    return new Promise((reslove,reject)=>{
        cont.query(sql,[user,pwd],(err,res)=>{
            if(err){
                return reject();
            }
            reslove(res);
        })
    })
};
const getData = ({
    page,pageSize
})=>{
    const sql = `select * from data limit ${page},${pageSize}`;
    return new Promise((reslove,reject)=>{
        cont.query(sql,(err,res)=>{
            if(err){
                reject();
            };
            cont.query('select count(1) from data',(err1,res1)=>{
                if(err1){
                    reject();
                };
                reslove({
                    data:res,
                    length:res1[0]['count(1)']
                })
            })
        })
    });
}
const setState = ({id,state})=>{
    const sql = 'update data set state =? where id =?';
    return new Promise((reslove,reject)=>{
        cont.query(sql,[state,id],(err,res)=>{
            if(err){
                reject();
            };
            reslove(true)
        })
    })
}
const remove = ({
    id
}) => {
    const sql = 'DELETE FROM DATA WHERE id = ?';
    return new Promise((reslove, reject) => {
        cont.query(sql, [id], (err, res) => {
            if (err) {
                reject();
            };
            reslove(true)
        })
    })
}
module.exports = {
    signIn,getData,setState,remove
}