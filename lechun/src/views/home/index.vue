<template>
    <div class="wrap">
        <HeaderNav/>
        <section>
            <HeaderSwiper/>
            <main>
                <SectionList :data='$store.state.data'/>
            </main>
        </section>
        <FooterNav/>
    </div>
</template>
<script>
import SectionList from './components/SectionList'
import HeaderNav from './components/HeaderNav'
import HeaderSwiper from './components/HeaderSwiper'
import FooterNav from 'comp/FooterNav';
import Product from 'comp/Product';
export default {
    mounted() {
        this.$store.dispatch('A_GET_DATA');
    },
   components:{
       FooterNav,HeaderNav,Product,HeaderSwiper,SectionList
   }
}
</script>
<style scoped>
main{
    height:auto;
    margin: 20px 0;
}
</style>
