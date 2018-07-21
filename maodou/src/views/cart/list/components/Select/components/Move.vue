<template>
    <div class="SelectMove" @click.stop='()=>{}' >
        <li v-for='(items,index) in datas' :key='index'>
            <h6>{{items.title}}</h6>
            <span v-for='(item,indey) in items.main' :key='indey' @click='show(index,indey)' :class='{"active":item.isShow}'>{{item.name}}</span>
        </li>
        <Btn :reset='reset'/>
    </div>
</template>
<script>
    import Btn from './component/Btn';
    export default {
        props:{
            allData:{
                type:Object,
                default:()=>{
                    return {}
                }
            }
        },data(){
            return {
                datas:[{
                    title:'首付',
                    main:[{
                        name:'一万以上',isShow:false
                    },{
                        name:'1-2万',isShow:false
                    },{
                        name:'2-3万',isShow:false
                    },{
                        name:'3-4万',isShow:false
                    },{
                        name:'4万以上',isShow:false
                    }]
                },{
                    title:'月供',
                    main:[{
                        name:'2000元以内',isShow:false
                    },{
                        name:'2000-3000',isShow:false
                    },{
                        name:'3000-4000',isShow:false
                    },{
                        name:'4000-5000',isShow:false
                    },{
                        name:'5000以上',isShow:false
                    }]
                },{
                    title:'指导价',
                    main:[{
                        name:'10万以下',isShow:false
                    },{
                        name:'10-15万',isShow:false
                    },{
                        name:'15-20万',isShow:false
                    },{
                        name:'20-30万',isShow:false
                    },{
                        name:'50万以上',isShow:false
                    }]
                },{
                    title:'排量',
                    main:[{
                        name:'1.0L以下',isShow:false
                    },{
                        name:'1.0-2.0',isShow:false
                    },{
                        name:'2.0-3.0',isShow:false
                    },{
                        name:'3.0以上',isShow:false
                    }]
                },{
                    title:'变速箱',
                    main:[{
                        name:'手动',isShow:false
                    },{
                        name:'自动',isShow:false
                    }]
                },{
                    title:'进气形式',
                    main:[{
                        name:'自然吸气',isShow:false
                    },{
                        name:'涡轮增压',isShow:false
                    }]
                },]
            }
        },
        methods:{
            show(x,y){
                this.datas[x].main[y].isShow = !this.datas[x].main[y].isShow;
                if(this.datas[x].main[y].isShow){
                    
                }

            },
            reset:function(){
                for(let i=0;i<this.datas.length;i++){
                    for(let j=0;j<this.datas[i].main.length;j++){
                        this.datas[i].main[j].isShow=false;
                    }
                }
            }
        },
        components:{
            Btn
        }
    }
</script>
<style scoped>
.SelectMove{
    background: #fff;
}
li{
    list-style: none;
}
span{
    display:inline-block;
    width:26.6%;
    margin: 5px 3%;
    background:#eee;
    text-align: center;
    padding: 5px 0;
    border:1px solid transparent;
}
span.active{
    border:1px solid orange;
}
</style>
