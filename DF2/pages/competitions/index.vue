<template>
  <div class="wrap">
    <nav-link />
    <div class="main">
      <competitions-list :compet.sync='changeData'/>
      <Container :compet='changeData'/>
    </div>
  </div>
</template>

<script>
import Container from '~/components/competitions/container.vue'
import NavLink from '~/components/index/nav.vue';
import CompetitionsList from '~/components/competitions/list.vue';
export default {
  transition: 'test',
  data(){
    return {
        changeData:{
          search:'',
          state:'all',
          type:'-1',
          page:1,
          per_page:15,
          sort:'default'
        }
    }
  },
  methods:{
  },
  components: {
    NavLink,
    CompetitionsList,
    Container
  }
}
</script>

<style>
.main{
  padding-top:100px;
}
</style>

