<template>
<nav>
    <img :src="imgsrc">
    <ul class='nav'>
        <nuxt-link v-for='(item,index) in nav' :key='index' :to='item.path' tag='li' active-class='active' exact>{{item.name}}</nuxt-link>
    </ul>
    <div class="icon">
        <span>EN</span>
        <nuxt-link class='login' tag='button' to='/login'>登录</nuxt-link>
        <nuxt-link class='register' tag='button' to='/register'>注册</nuxt-link>
    </div>
</nav>
</template>
<script>
export default {
    data(){
        return {
            imgsrc:'https://www.datafountain.cn/_df_static/img/logo.378fa14.png',
            nav:[{
                name:'首页',
                path:'/'
            },{
                name:'全部赛事',
                path:'/competitions'
            },{
                name:'专家库',
                path:'/experts'
            },{
                name:'企业办赛',
                path:'/business'
            },{
                name:'个人主页',
                path:'/user/:id'
            },{
                name:'帮助',
                path:'/home'
            }]
        }
    },
    mounted() {
    },
}
</script>
<style>
nav{
    padding:20px 100px;
    height:100px;
    position: fixed;
    top:0;
    left:0;
    right:0;
}
nav img{
    width:200px;
    height:auto;
    float:left;
}
nav ul{
    width:60%;
    float:left;
}
.nav>li{
    float:left;
    list-style: none;
    padding: 5px 20px;
    cursor: pointer;
    border-bottom:1px solid transparent;
}
.nav>.active{
    border-bottom-color:rgba(20,100,100,.6);
}
.icon{
    float:right;
}
.icon>span{
    padding:5px 20px;
}
.icon>button{
    margin-left:5px;
    border-radius: 5px;
    padding:5px 20px;
    border:0;
    outline: none;
    cursor: pointer;
}
.login{
    background:#59b2c3;
    color:#fff;
}
.register{
    background:#fff;
    color:#59b2c3;
}
</style>
