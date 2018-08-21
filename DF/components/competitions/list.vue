<template>
    <div class='list'>
        <ul class="state">
            <li v-for='(item,index) in state' :key='index' @click='change("state",item.id)'>{{item.name}}</li>
        </ul>
        <ul class="type">
            <li v-for='(item,index) in type' :key='index' @click='change("type",item.id)'>{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        cmy:{
            defualt:()=>{
                return {}
            },
            type:Object
        }
    },
    data(){
        return {
            state:[{
                id:1,
                name:'可以报名'
            },{
                id:2,
                name:'不能报名'
            }],
            type:[{
                name:'创业型',
                id:1
            },{
                name:'结果型',
                id:2
            }],
            show:{
                state:'',
                type:''
            }
        }
    },
    mounted() {
        
    },
    methods:{
        change(type,id){
            let show = this.show;
            show[type] = id;
            this.show={...show};
            this.$emit('update:cmy',show);
            console.log(show,'我是子元素里面的东西')
        }
    }
}
</script>
<style>
li{
    list-style: none;
}
.state,.type{
    height:50px;
}
.state>li,.type>li{
    float:left;
    padding:10px 20px;
}
</style>