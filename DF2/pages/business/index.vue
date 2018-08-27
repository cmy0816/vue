<template>
  <div class="wrap">
    <nav-link />
    <div class="container">
      <Banner/>
      <Service/>
      <Data/>
      <Good/>
    </div>
  </div>
</template>

<script>
import NavLink from '~/components/index/nav.vue';
import Banner from '~/components/business/banner.vue';
import Service from '~/components/business/service.vue';
import Data from '~/components/business/data.vue';
import Good from '~/components/business/good.vue';
export default {
  transition: 'test',
  data(){
    return {
        
    }
  },
  components: {
    NavLink,
    Banner,
    Service,
    Data,
    Good
  }
}
</script>
<style scoped>
.container{
  padding-top:70px;
}
</style>


