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
  name:'index',
  data(){
    return {
        
    }
  },
  components: {
    NavLink,IndexBanner,IndexHot
  }
}
</script>

<style>

</style>

