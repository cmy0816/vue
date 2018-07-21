const connect = require('../db/connect');//抛出一个变量，与数据库建立连接
// const findUser = ({
//     mobile,
//     password
// }) =>{
//     const sql = 'select * from user where `modile` =? and `password` =?';
//     return new Promise((resolve,reject)=>{
//         connect.query(sql,[mobile,password],(error,res)=>{
//             if(error){
//                 reject();
//                 return;
//             }
//             resolve(res[0]);
//         })
//     })
// };
const userInfo = ({
    mobile
}) =>{
    const sql = 'select * from user where `mobile` =?';
    return new Promise((resolve,reject)=>{
        connect.query(sql,[mobile],(error,res)=>{
            if(error){
                reject();
                return;
            };
            if(res.length){
               resolve(res[0]); 
            }else{
                connect.query('insert into user(mobile) value('+mobile+')',[mobile],(err,res)=>{
                    if(err){
                        reject();
                    }else{
                        resolve(res);
                    }
                })
            }
            
        })
    })
};
const getData = ()=>{
    const sql = 'select * from data';
    return new Promise((res,rej)=>{
        connect.query(sql,(err,data)=>{
            if(err)rej();
            res(data);
        })
    })
}
const getDetail = (id)=> {
    const sql = 'select * from data where `id` =?';
    return new Promise((resolve, reject) => {
        connect.query(sql, [id], (error, res) => {
            if (error) {
                reject();
                return;
            };
            resolve(res[0]);
        })
    })
}
const getUser = (tem) => {
    const sql = 'select * from user where `mobile` =?';
    return new Promise((resolve,reject) => {
        connect.query(sql,[tem],(err,res)=>{
            if(err)return reject();
            resolve(res[0]);
        })
    })
}
const getAdd = (id) => {
    const sql = 'select * from user where `id` =?';
    return new Promise((resolve,reject)=>{
        connect.query(sql,[id],(err,res) => {
            if(err)return reject();
            resolve(res[0].mobile);
        });
    })
};
const getMine = (id) => {
    const sql = 'select * from user where `id` =?';
    return new Promise((resolve, reject) => {
        connect.query(sql, [id], (err, res) => {
            if (err) return reject();
            resolve(res[0]);
        });
    })
};
module.exports = {
    // findUser,
    userInfo,
    getData,
    getDetail,
    getUser,
    getAdd,
    getMine
}