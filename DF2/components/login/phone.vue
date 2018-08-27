<template>
<div class="input">
    <input v-model='user' class="user" placeholder="请输入用户名/邮箱/手机号">
    <input v-model='pwd' class="pwd" placeholder="请输入密码">
    <div class="container">
        <div class="checkbox">
        <input type="checkbox"/>
        记住密码
        </div>
        <a class='forget'>忘记密码</a>
    </div>
    
</div>
</template>
<script>
export default {
    props: {
        info: {
            default:()=>{
                return {}
            },
            type: Object
        }
    },
    data() {
        return {
            user:'',
            pwd:''
        }
    }
}
</script>
<style scoped>
.input{
    width:100%;
}
.input>input{
    border:none;
    display:block;
    border-bottom:1px solid #ccc;
    outline: none;
    width:100%;
    margin: 30px 0;
}
.container{
    margin:30px 0;
    display:flex;
    align-items: center;
    justify-content:space-between; 
}
a{
    text-decoration: none;
}
.forget{
    color:#32c5d2;
}
</style>
