<template>
<div class="SearchLevel" @click.stop='()=>{}'>
    <dl v-for='(item,index) in data' :key='index' :class='{"active":item.isShow}' @click='show(index)'>
        <dt><img src="" alt=""></dt>
        <dd>{{item.name}}</dd>
    </dl>
    <Btn :reset='reset'/>
</div>
</template>
<script>
    import Btn from './component/Btn'
    export default{
        data(){
            return {
                data:[{
                    name:'两厢轿车',
                    isShow:false
                },{
                    name:'三厢轿车',
                    isShow:false
                },{
                    name:'SUV',
                    isShow:false
                },{
                    name:'MPV',
                    isShow:false
                },]
            }
        },
        methods:{
            show(index){
                this.data[index].isShow=!this.data[index].isShow
            },
            reset(){
                for(let i=0;i<this.data.length;i++){
                    this.data[i].isShow=false;
                }
            }
        },
        components:{Btn}
    }
</script>
<style scoped>
.SearchLevel{
    background:#fff;
}
dl{
    border:1px solid transparent;
    margin: 10px;
    margin-top:0;
    line-height: 2;
}
dl.active{
    border:1px solid orange;
}
</style>
