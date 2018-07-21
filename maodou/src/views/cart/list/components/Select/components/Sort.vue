<template>
    <div class='SearchSort' @click.stop='()=>{}'>
        <li v-for='(items,index) in lists' :key='index' @click='sort(index)' :class='{"active":items.isShow}'>
            <span>{{items.name}}</span>
            <em v-show='items.isShow'>√</em>
        </li>
    </div>
</template>
<script>
export default {
    props:{
        allData:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    data(){
        return{
            lists:[{
                name:'默认排序',
                isShow:true
            },{
                name:'首付由低到高',
                isShow:false
            },{
                name:"首付由高到低",
                isShow:false
            },{
                name:"月供由低到高",
                isShow:false
            },{
                name:"月供由高到低",
                isShow:false
            },{
                name:"车价由低到高",
                isShow:false
            },{
                name:"车价由高到低",
                isShow:false
            }],
            def:"默认排序"
        }
    },
    methods:{
        sort:function(type){
            for(let i=0;i<this.lists.length;i++){
                this.lists[i].isShow=false;
            }
            this.lists[type].isShow=true;
            let all = {...this.allData};
            all.sort = this.lists[type];
            this.$emit('update:allData',all)
        }
    }
}
</script>
<style scoped>
.SearchSort{
    background:#fff;
}
li{
    list-style: none;
    line-height: 2;
    border-bottom:1px solid #ccc;
}
li.active{
    color:orange;
}
</style>

