<template>
    <div class="searchCity">
        <a href="javascript:;" @click="visibility=!visibility">{{city}}</a>
        <CityList :visibility.sync='visibility' v-model='city'/>
    </div>
</template>
<script>
    import CityList from './components/CityList'
    export default {
        data(){
            return {
                city:'全国',
                visibility:false
            }
        },
        components:{
            CityList
        }
    }
</script>
<style scoped>
.searchCity{
    margin-right:.1rem;
}
a{
    line-height: 2.5;
    color:#3f4359;
}
</style>
