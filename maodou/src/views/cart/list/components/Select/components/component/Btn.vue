<template>
<div class='btn' @click.stop='()=>{}'>
    <button class='reset' @click='reset'>重置</button>
    <button class='see' @click='close'>查看</button>
</div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        props:{
            reset:{
                type:Function,
                default:()=>{}
            },
            close:{
                type:Function,
                default:()=>{}
            }
        }
    }
</script>
<style scoped>
    .btn{
        padding:.1rem;
        background:#fff;
        height:.3rem;
    }
    button{
        width:45%;
        border:0;
        height:.3rem;
        outline: none;
    }
    .reset{
        float:left;
        background:#eee;
        color:#ccc;
    }
    .see{
        float:right;
        background:orange;
        color:#fff;
    }
</style>
