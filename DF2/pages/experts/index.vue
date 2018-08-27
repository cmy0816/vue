<template>
  <div class="wrap">
    <NavLink />
    <div class="container">
      <div class='experts-nav'>
        <nuxt-link v-for='(item,index) in nav' :key='index' active-class='active' tag='span' :to='{path:`/experts/${index}?`,query:{page:`${page}`}}'>{{item}}</nuxt-link>
      </div>
      <People/>
    </div>
  </div>
</template>
<script>
import People from '~/components/experts/people.vue'
import NavLink from '~/components/index/nav.vue';
export default {
  transition: 'test',
  data(){
    return {
        nav:['全部','评审专家','专业导师','CCF大专委'],
        page:1
    }
  },
  mounted() {
  },
  methods:{
  },
  components: {
    NavLink ,
    People
  }
}
</script>
<style scoped>
.container{
  padding: 100px 100px;
}
.experts-nav{
  border-radius: 5px;
}
.experts-nav span{
  border:1px solid #ccc;
  padding:10px 20px;
  border-right:0;
  cursor: pointer;
}
.experts-nav span:last-child{
  border-right: 1px solid #ccc;
}
.experts-nav .active{
  background:#59b2c3;
  color:#fff;
}
</style>



