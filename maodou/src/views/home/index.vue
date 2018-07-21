<template>
    <div class="wrap">
        <section>
            <HeaderBar>
                0-1成首付开新车
            </HeaderBar>
            <Search></Search>
        </section> 
        <FooterNav></FooterNav>
    </div>
</template>
<script>
import HeaderBar from 'comp/HeaderBar'
import FooterNav from 'comp/FooterNav'
import Search from 'comp/Search'
    export default {
        components:{
            FooterNav,Search,HeaderBar
        }
    }
import '../../static/scss/index.min.css'
</script>


