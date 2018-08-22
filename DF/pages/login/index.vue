<template>
    <div class="wrap">
        <div class="container">
            <div class="title">追逐百万数据梦想</div>
            <div class="login">
                <div class="type">
                    <span class="account" @click='changeType'>{{type.show}}</span>
                    <span class="phone">{{type.hidden}}</span>
                </div>
                <Account v-if='isShow === "账号登录"' :info.sync='info'/>
                <Phone v-else :info.sync='info'/>
                <div class='btn'>
                    <p>公共环境下不建议记录私密信息</p>
                    <button>登   录</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Account from '~/components/login/account.vue';
import Phone from '~/components/login/phone.vue';
export default {
    data(){
        return {
            type:{
                show:'账号登录',
                hidden:'手机验证登录'
            },
            isShow:'账号登录',
            info:{
                user:'',
                pwd:''
            }
        }
    },
    methods:{
        changeType(){
            this.isShow = this.type.show;
            this.type.show = this.type.hidden;
            this.type.hidden = this.isShow;
        }
    },
    components:{
        Account,Phone
    }
}
</script>
<style scoped>
.input{
    width:100%;
}
.wrap{
    width:100%;
    background:url('https://sso.datafountain.cn/assets/img/login-bg.png') no-repeat;
    background-size:100% 100%;
}
.container{
    width:360px;
    margin:0px auto;
    padding-top:50px;
    padding-bottom:200px;
}
.title{
    background:url('https://sso.datafountain.cn/assets/img/df_logo.png') no-repeat;
    padding-top:60px;
    background-position: top center;
    background-size:320px auto;
    color:#697882;
    text-align: center;
    padding-bottom:20px;
}
.login{
    background:#fff;
    border-radius: 5px;
    padding:20px;
}
.type{
    display:flex;
    align-items:center;
    justify-content: space-between;
}
.account{
    font-size:20px;
}
.btn{
    width:100%;
}
.btn>p{
    color:rgba(200,50,50,1);
    font-size:14px;
}
.btn>button{
    width:100%;
    padding:10px 0;
    border:none;
    outline: none;
    background:#32c5d2;
    color:#fff;
    font-size:16px;
}
</style>
