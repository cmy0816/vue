<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in swiperSlides" :key='index'>
        <img :src="slide">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autopaly:true,
          loop:true
        },
        swiperSlides: ['http://resource2.lechun.cc/imgStorage/3192666929356045256.png']
      }
    },
    mounted() {
    },
    components: {
    swiper,
    swiperSlide
    }
  }
</script>
<style scoped>
img{
    width:100%;
    height:auto;
}
</style>
