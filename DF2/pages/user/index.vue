<template>
  <div class="wrap">
    <nav-link />
  </div>
</template>

<script>
import NavLink from '~/components/index/nav.vue';
export default {
  transition: 'test',
  fetch({redirect}){
    if(!window.localStorage.getItem('user')){
      redirect('/login')
    }else{
      redirect('/user/'+window.localStorage.getItem('user'))
    }
  },
  data(){
    return {
        
    }
  },
  components: {
    NavLink
  }
}
</script>

<style>
</style>

