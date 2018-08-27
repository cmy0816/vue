<template>
    <div class="good">
        <Title :title='title'/>
        <div class="container-good">
              <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide v-for='(item,index) in data' :key='index'>
                        <div class="item">
                            <h6>{{item.title}}</h6>
                            <p>{{item.detail}}</p>
                        </div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div>
              </swiper>
        </div>
    </div>
</template>
<script>
import Title from './title.vue';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'carrousel',
    data () {
        return {
            title:'我们的优势',
            data:[{
                title:'丰富办赛经验',
                detail:'超过70道大数据赛题运营推广经验，近5万人次参赛体验，10余万次作品提交，200余社群及高校合作联动，一流赛事服务团队及合作单位支持。'
            },{
                title:'品牌影响力',
                detail:'DF（DataFountain）的目标是构建中国最有影响力和权威度的数据科学与大数据分析处理竞赛平台，平台的宗旨是“数据互联、大众创新”，是大数据资源和需求的汇聚地，是优秀数据科学家的俱乐部，是“大众创业，万众创新”的在线空间。'
            },{
                title:'优质的高校资源',
                detail:'DataFoutain拥有450+优质院校院系300+高校指导员50+学科带头人。'
            },{
                title:'',
                detail:''
            }],
            swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            autoplay: 3000,
            direction : 'vertical',
            grabCursor : true,
            setWrapperSize :true,
            autoHeight: true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            prevButton:'.swiper-button-prev',//上一张
            nextButton:'.swiper-button-next',//下一张
            scrollbar:'.swiper-scrollbar',//滚动条
            mousewheelControl : true,
            observeParents:true,
            // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
            debugger: true,
            }
        }
    },
    mounted() {
    },
    components: {
        Title,
        swiper,
        swiperSlide
    }
}
</script>
<style scoped>
.container-good{
    background: url('https://www.datafountain.cn/_df_static/img/carousel.d75a104.jpg') no-repeat;
    background-size:cover;
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
    }
</style>
