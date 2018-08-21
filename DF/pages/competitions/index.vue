<template>
  <div class="wrap">
    <nav-link />
    <div class="main">
      <competitions-list :cmy.sync='changeData'/>
      <button @click='show'></button>
    </div>
  </div>
</template>

<script>
import NavLink from '~/components/index/nav.vue';
import CompetitionsList from '~/components/competitions/list.vue';
export default {
  data(){
    return {
        changeData:{}
    }
  },
  methods:{
    show(){
      console.log(this.changeData);
    }
  },
  components: {
    NavLink,
    CompetitionsList
  }
}
</script>

<style>
.main{
  padding-top:100px;
}
</style>

