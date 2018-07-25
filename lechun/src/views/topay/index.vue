<template>
<div class="wrap">
    <ul>
        <li>
            <!-- <div class="user">
                <span>程小梦</span><span>13031131383</span><br/>
                <span>北京北京市海淀区 北京八维</span><em>学校</em>
            </div>
            <span>></span> -->
            <router-link to="/address" tag='span'>您还没有填写配送地址，请点击添加</router-link>
        </li>
        <li>
            <span>配送日期</span>
            <span @click='showDate = true'>{{time}}</span>
            <SetDate :isShow.sync='showDate'/>
        </li>
    </ul>
    <ul>
        <li>
            <span>优惠券</span>
            <span>￥0.00</span>
        </li>
        <li>
            <span>余额</span>
            <InlineXSwitch v-model="checkbox"/>
        </li>
        <li>这里是每一个商品</li>
        <div class="word">
            <div class="money">
                <p><span>商品合计</span><a>￥</a></p>
                <p><span>邮费</span><a>免运费</a></p>
                <p><span>优惠券</span><a>￥0.00</a></p>
                <p><span>使用余额</span><a>￥</a></p>
            </div>
            <ol>
                <li>2-6摄氏度冷藏|开盖后24小时内食用|若乳清析出不影响食用</li>
                <li>由于雾霾、大雾天气、航空延误等不可抗拒因素，部分地区的小酸奶可能会晚些送到，请耐心等待噢</li>
                <li>购物须知？</li>
            </ol>
        </div>
    </ul>
    <footer>
        <div class="flex">
            <button>实付￥{{pic/100}}</button>
            <button>立即支付</button>
        </div>
    </footer>
</div>
</template>
<script>
import { InlineXSwitch } from 'vux';
import SetDate from './components/SetDate.vue'
export default {
    data(){
        return {
            checkbox:'',
            pic:100,
            showDate:false,
            time:'请选择配送日期'
        }
    },
    mounted() {
        
    },
    methods:{
    },
    components:{
        InlineXSwitch,SetDate
    }
}
</script>
<style scoped>
footer{
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    height:.5rem;
}
.flex{
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height:.5rem;
}
.flex>button:nth-child(1){
    background:#fff;
}
.flex>button{
    flex:1;
    height:100%;
    border:0;
}
li{
    border-bottom:1px solid #ccc;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:.1rem;
}
p>span{
    text-align: right;
}
.money{
    margin: .1rem .05rem;
}
.money>p{
    text-align: right;
    line-height: 2;
}
p>a{
    display:inline-block;
    width:.6rem;
}
</style>
