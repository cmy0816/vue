<template>
<nav>
    <span v-for='(item,index) in list' :key='index' @click='now(index)' :class='{"active":item.isActive}'>{{item.name}}</span>
</nav>
</template>
<script>
    export default {
        data(){
            return {
                list:[{
                    name:'单盒自选',
                    isActive:false
                },{
                    name:'纤巧装',
                    isActive:false
                },{
                    name:'家庭装',
                    isActive:false
                },{
                    name:'福利社',
                    isActive:false
                }]
            }
        },
        methods:{
            now(index){
                this.$emit('change',index);
                for(let i=0;i<this.list.length;i++){
                    this.list[i].isActive = false;
                };
                this.list[index].isActive=true;            
                }
        }
    }
</script>
<style scoped>
nav{
    display:flex;
    align-items: center;
    justify-content: space-around;
    padding:5px 10px;
}
span{
    text-align: center;
    display:inline-block;
    padding: 5px;
    border-bottom:1px solid transparent;
    transition: all .8s;
}
span.active{
    font-size:.16rem;
    border-color:#e50011;
    color:#e50011;
}
</style>
