<template>
    <div class="item">
        <ul>
            <Product v-for='(item,index) in data' :data='item' :big='index' :key='index' />
        </ul>
    </div>
</template>
<script>
    import Product from 'comp/Product';
    export default {
        props:{
            data:{
            type:Array,
            default:()=>{
                return []
            },
            },
        },
        components:{
            Product
        }
    }
</script>
<style scoped>
ul{
    display:flex;
    flex-wrap: wrap;
}
.header{
    text-align: center;
    padding: 10px 0;
}
h5{
    font-size:.18rem;
}
h6{
    display:inline-block;
    border:1px solid #ccc;
}
</style>
