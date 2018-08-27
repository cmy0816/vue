<template>
<div class="input">
    <input v-model='user' class="user" placeholder="请输入手机号">
    <input v-model='pwd' class="pwd" placeholder="请输入验证码">
    <button>获取验证码</button>
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
    position: relative;
}
.input>button{
    position: absolute;
    right:10px;
    bottom:10px;
    border:0;
    outline: none;
    background:transparent;
}
.input>input{
    border:none;
    display:block;
    border-bottom:1px solid #ccc;
    outline: none;
    width:100%;
    margin: 30px 0;
}
</style>
