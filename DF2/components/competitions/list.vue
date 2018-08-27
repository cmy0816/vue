<template>
    <div class="comp-nav">
        <div class='list'>
            <ul class="state">
                <li class="title">赛题状态</li>
                <li v-for='(item,index) in state' :key='index' @click='change("state",item.type)'>{{item.name}}</li>
            </ul>
            <ul class="type">
                <li class="title">赛题类型</li>
                <li v-for='(item,index) in type' :key='index' @click='change("type",item.type)'>{{item.name}}</li>
            </ul>
        </div>
        <div class="sort">
            <span class="one">排序:</span>
            <span v-for='(item,index) in sort' :key='index' @click='change("sort",item.sort)'>{{item.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        compet:{
            defualt:()=>{
                return {}
            },
            type:Object
        }
    },
    data(){
        return {
            state:[{
                type:'all',
                name:'全部'
            },{
                type:'out_service',
                name:'可报名'
            },{
                type:'n_service',
                name:'进行中'
            },{
                type:'can_signup',
                name:'已结束'
            }],
            type:[{
                name:'全部',
                type:'all'
            },{
                name:'结果提交型',
                type:'1'
            },{
                name:'创意方案型',
                type:'2'
            }],
            sort:[{
                sort:'default',
                name:'默认'
            },{
                sort:'hottest',
                name:'最热'
            },{
                sort:'latest',
                name:'最新'
            }]
        }
    },
    mounted() {
        
    },
    methods:{
        change(type,id){
            let show = this.compet;
            show[type] = id;
            this.$emit('update:compet',show);
            this.$router.push({
                path:'/competitions',
                query:{...show}
            })
        }
    }
}
</script>
<style>
.state>li:active,.type>li:active,.sort>span:active{
    font-weight: 600;
}
.list li{
    list-style: none;
    color: #def0f3;
    line-height: 3;
    font-size: 16px;
    cursor: pointer;
}
.list>ul{
    padding:0;
    height:60px;
}
.list ul>li{
    float:left;
}
.list{
    background: #0088c0 url('https://www.datafountain.cn/_df_static/img/competitions-header.5b13497.png');
    background-size: cover;
    background-position: top;
    padding: 20px 100px;
}
.title{
    margin-right:100px;
    font-weight: 600;
}
.list li{
    margin-right:50px;
}
.sort{
    padding:20px 100px;
    font-size:14px;
}
.sort span{
    margin-right:20px;
    cursor: pointer;
}
.sort .one{
    margin-right:40px;
}
</style>