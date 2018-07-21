<template>
    <header>
        <Address/>
        <HeaderTabNav @change='getIndex'/>
    </header>
</template>
<script>
import Address from './components/Address';
import HeaderTabNav from './components/HeaderTabNav';
export default {
    methods:{
        getIndex(index){

        }
    },
    components:{
        Address,HeaderTabNav
    }
}
</script>
<style scoped>
    header{
        box-shadow: 0px 0px 10px 5px #ccc;;
    }
</style>
