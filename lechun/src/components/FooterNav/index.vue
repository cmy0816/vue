<template>
    <footer>
        <router-link to='/home'>主页</router-link>
        <span @click='show = true'>购物袋<em>{{num}}</em></span>
        <FooterCar :show.sync='show'/>
        <router-link to='/user'>我的乐纯</router-link>
    </footer>
</template>
<script>
import FooterCar from './components/FooterCar';
export default {
    data(){
        return {
            show:false,
        }
    },
    components:{
        FooterCar
    },
    computed:{
        num:function(){
            let num = 0;
            this.$store.getters.CAR.forEach(ele => {
                num += ele.limitBuyCount*1;
            });
            return num;
        },
    }
}
</script>
<style scoped>
    footer{
        display:flex;
        align-items: center;
        justify-content: space-around;
        line-height: 3;
        background:rgba(250,250,250);
    }
    span{
        display:inline-block;
        width:40px;
        height:40px;
        margin-top:-20px;
        border-radius: 50%;
        box-shadow: 0px 0px 10px 5px #ccc;
        text-align: center;
        margin-left:20px;
        background:#f7f7f7;
        position: relative;
        z-index: 10;
    }
    em{
        position: absolute;
        top:-5px;
        right:0px;
        z-index: 20;
        width:15px;
        height:15px;
        background-color: rgba(154,154,154,1);
        color:#fff;
        line-height: 1.2;
        font-style: normal;
        border-radius: 50%;
    }
</style>
