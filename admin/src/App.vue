<template>
<div class="wrap">
  <Index v-if='$store.state.isLogin'/>
  <Login v-else/>
</div>
</template>

<script>
import Index from './layout/Index.layout.vue';
import Login from './layout/login.layout.vue'
export default {
  name: 'App',
  components:{
    Index,Login
  }
}
</script>

<style>
</style>
