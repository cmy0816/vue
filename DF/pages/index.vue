<template>
  <div class="wrap">
    <nav-link />
    <index-banner/>
    <index-hot/>
  </div>
</template>

<script>
import NavLink from '~/components/index/nav.vue';
import IndexBanner from '~/components/index/banner.vue';
import IndexHot from '~/components/index/hot.vue'
export default {
  data(){
    return {
        
    }
  },
  components: {
    NavLink,IndexBanner
  }
}
</script>

<style>
.wrap{
  width:80%;
  height:auto;
  margin: 0 auto;
}
</style>

