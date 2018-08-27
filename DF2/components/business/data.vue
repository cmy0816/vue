<template>
    <div class="data">
        <Title :title='title'/>
        <div class='data_cont'>
            <div class='item' :style='{background:"url("+item.src+") no-repeat" }' v-for='(item,index) in data' :key='index'>
                <h6>{{item.tit}}</h6>
                <p>{{item.detail}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import Title from './title.vue';
export default {
    data () {
        return {
            title: '为什么我们要做数据竞赛',
            data:[{
                src:'https://www.datafountain.cn/_df_static/img/business-why-1.75fa781.jpg',
                tit:'提高品牌影响力',
                detail:'DF平台竞赛覆盖政府、机构、高校、学会协会、企业等多层面尖端用户，助力提高您的品牌影响力'
            },{
                src:'https://www.datafountain.cn/_df_static/img/business-why-2.f966e6a.jpg',
                tit:'突破技术瓶颈',
                detail:'数十万数据科学家助力您突破技术瓶颈，低成本解决大问题。'
            },{
                src:'https://www.datafountain.cn/_df_static/img/business-why-3.8b99c15.jpg',
                tit:'挖掘高端技术人才',
                detail:'通过数据竞赛，精准打通企业与人才的桥梁，让搜寻数据科学人才不再困难。'
            },]
        }
    },
    components :{
        Title
    }
}
</script>
<style scoped>
.data_cont{
    padding:0 100px;
    display:flex;
}
.item{
    margin:10px;
    border-radius:5px;
    background-size:cover;
    display:flex;
    flex-direction: column;
    justify-content: center;
    flex:1;
    text-align: center;
    padding: 60px 48px;
    color: #d9d9d9;
}
    h6{
        font-size:24px;
        font-weight: 600;
    }
    p{
        font-size: 14px;
        line-height: 1.5;
        margin-top:20px;
        margin-bottom:20px;
    }
</style>
