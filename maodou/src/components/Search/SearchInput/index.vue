<template>
    <div class="SearchInput">
        <span @click='visibility=true'>搜索你想要的车</span>
        <SearchCar :visibility.sync='visibility'/>
    </div>
</template>
<script>
    import SearchCar from './components/SearchCar'
    export default {
        data(){
            return {
                visibility:false
            }
        },
        mounted() {
            
        },
        methods:{

        },
        components:{SearchCar}
    }
</script>
<style scoped>
    .SearchInput{
        flex:1;
        border-radius: 20px;
        background:#eee;
        color:#c6c8d5;
        padding-left:.2rem;
        margin:.05rem;
        line-height: 2;
    }
    span{
        width:100%;
    }
</style>
