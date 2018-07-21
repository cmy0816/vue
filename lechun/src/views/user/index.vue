<template>
    <div class="wrap">
        <section>
            <div class='header'>
                <router-link tag='div' class="log"  :to='{path:`/user/${user.id}`}'>
                    <img :src="user.src" :class='{"black":!user.src}'>
                    <span>{{user.mobile}}   ></span>
                </router-link>
                <div class="vip">
                    <button>会员最高享9折 ></button>
                    <button class='goVip'>点击进入会员中心</button>
                </div>
            </div>
            <div class="order">
                <li>
                    <h6>我的订单</h6>
                    <h6 class='all'>查看全部订单 ></h6>
                </li>
                <div class="icon">
                    <span>待付款</span>
                    <span>待发货</span>
                    <span>待收货</span>
                    <span>待评价</span>
                </div>
            </div>
            <ul>
                <li>
                    <span>修改订单</span>
                    <span>无</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>储值/余额</span>
                    <span>{{user.money}}></span>
                </li>
                <li>
                    <span>我的优惠券</span>
                    <span>{{user.coupon}}></span>
                </li>
                <router-link tag='li' :to='{path:`/mine/${user.id}`}'>
                    <span>我的地址</span>
                    <span>></span>
                </router-link>
            </ul>
            <ul>
                <li>
                    <span>意见反馈</span>
                    <span>></span>
                </li>
                <li>
                    <span>联系客服</span>
                    <span>></span>
                </li>
            </ul>
        </section>
        <FooterNav/>
    </div>
</template>
<script>
import FooterNav from 'comp/FooterNav';
    export default {
        data(){
            return {
                user:{}
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            getData(){
                fetch('/api/user?tem='+this.$store.state.isLogin).then(res=>{
                    res.json().then(data=>{
                        if(data.code == 1){
                            this.user = data.data;
                        }else{
                            alert('服务器繁忙，请稍后重试')
                        }
                        
                    })
                })
            }
        },
        components:{
            FooterNav
        }
    }
</script>
<style scoped>
section{
    background:#eee;
}
.header{
    background:black;
    padding: .2rem .1rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-right:0;
}
.black{
    width:.5rem;
    height:.5rem;
    background:black;
    border-radius: 50%;
    border:1px solid #ccc;
}
.log{
    color:#fff;
    
}
.log>img{
    vertical-align: middle;
    margin-right:.1rem;
}
.vip{
    display:flex;
    flex-direction: column;
}
.vip button{
    color:#fff;
    border:0;
    padding: .03rem .05rem;
    background:none;
    border-radius: 10px 0 0 10px;
    background:rgba(240,0,0,1);
}
.vip .goVip{
    background:none;
}
h6{
    font-weight: 400;
}
li{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem;
    border-bottom:1px solid #ccc;
    color:#999;
    background:#fff;
}
ul{
    margin-bottom:.1rem;
}
.icon{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:.1rem;
    background:#fff;
    color:#999;
}
.icon>span{

}
</style>
