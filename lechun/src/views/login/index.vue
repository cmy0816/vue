<template>
    <div class="login">
        <img src="https://m.lechun.cc/images/login/login-bg.png" alt="">
        <div class="user">
            <input type="text" placeholder="手机号码" v-model='tem'>
            <li><input type="text" placeholder="短信验证码" v-model='code'><button @click='getNew'>获取短信验证码</button></li>
            <button @click='loging'>点击登录</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                tem:'',
                code:''
            }
        },
        mounted() {
            
        },
        methods:{
            loging(){
                fetch('/api/user/info',{
                    method:'POST',
                    headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body:'mobile='+this.tem+'&code='+this.code,
                    credentials: 'include'
                }).then(
                    res=>{res.json().then(data=>{
                        console.log(data);
                        if(data.code == 1){
                            window.location.href='http://localhost:8080/#'+this.$route.query.successUrl;
                            this.$store.commit('IS_LOGIN',this.tem);
                            window.localStorage.setItem('tem',this.tem);
                        }
                })});
            },
            getNew(){
                fetch('/api/msgCode?mobile='+this.tem,{credentials: 'include'}).then(
                    res=>{res.json().then(data=>{
                })})
            }
        }
    }
</script>
<style scoped>
.login{
    text-align: center;
    height:100%;
}
img{
    width:50%;
    height:auto;
}
.user{
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    padding:30px;
    align-items: center;
    height:15%;
}
</style>
