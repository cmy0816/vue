<template>
    <div class="wrap">
        <Search/>
        <section>
            <Select/>
        </section>
        <FooterNav></FooterNav>
    </div>
</template>
<script>
import Search from 'comp/Search'
import FooterNav from 'comp/FooterNav'
import Select from './components/Select'
export default {
    components:{
        FooterNav,Search,Select
    }
}
</script>



