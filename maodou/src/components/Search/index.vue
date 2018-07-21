<template>
    <div class="search">
        <SearchCity/>
        <SearchInput/>
    </div>
</template>
<script>
    import SearchCity from './SearchCity';
    import SearchInput from './SearchInput';
    export default {
        components:{
            SearchCity,SearchInput
        }
    }
</script>
<style scoped>
.search{
    display:flex;
    height:.4rem;
    padding:.05rem;
}
</style>
