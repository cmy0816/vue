<template>
<div class="container-swiper">
    <div class="slide" :style='{transform:`translateX(-100%*${index})`}'>
        <img v-for='(item,index) in banner' :key='index' :src='item.src'/>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return {
            banner:[{
                id:1,
                src:'https://wid.s3.cn-north-1.amazonaws.com.cn/uploads/images/2018-08-13/BDCI%20%281%29-582170.jpg'
                },{
                id:2,
                src:'https://wid.s3.cn-north-1.amazonaws.com.cn/uploads/images/2018-07-12/%E5%9B%BD%E5%AE%B6%E7%94%B5%E6%8A%95xinbanner-142287.jpg'
                },{
                id:3,
                src:'https://wid.s3.cn-north-1.amazonaws.com.cn/uploads/images/2018-07-12/%E5%B9%B3%E5%AE%89%E6%96%B0banner-843409.jpg'
                }],
            index:0
        }
    },
    mounted() {
        this.swiper()
    },
    methods:{
        swiper(){
            setInterval(() => {
              this.index = this.index+1;
              if(this.index>=this.banner.length){
                  this.index=0;
              }
            }, 1000)
            
        }
    }
}
</script>
<style>
.container-swiper{
    width:100%;
    height:500px;
    overflow: hidden;
    padding-top:100px;
}
.container-swiper>.slide{
    width:200%;
    height:100%;
    transform: translate(0,0);
    transition: all .5s;
}
.slide>img{
    width:50%;
    height:100%;
    float:left;
}
</style>