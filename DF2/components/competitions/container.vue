<template>
    <div class="com-container">
        <span v-if='!data.length'>暂无数据</span>
        <nuxt-link v-else :to='`/competitions/${item.id}/detail`'  v-for='item in data' :key='item.id'>
        <dl>
            <dt>
                <img v-lazy="item.icon" :key='item.icon'>
            </dt>
            <span>可报名</span>
            <dd>
                <h6>{{item.title}}</h6>
                <div class="left">
                    <p>{{item.organizers[0].name}}</p>
                    <p>{{item.subTitle}}</p>
                    <span class='type'>{{item.typeLabel}}</span>
                </div>
                <div class="right">
                    <div class='top'>
                        <div class='team'>
                            <span class='tit'>队伍</span>
                            <span>{{item.teams}}</span>
                        </div>
                        <div class='money'>
                            <span class='tit'>奖金</span>
                            <span>{{item.reward}}</span>
                        </div>
                    </div>
                    <li><span>{{time(item.endTime)}}</span>~<span>{{time(item.orderTime)}}</span></li>
                </div>
            </dd>
        </dl>
        </nuxt-link>
        <el-pagination
            layout="prev, pager, next"
            :total='total'
            @current-change='changeData'
            class='page'
            >
        </el-pagination>
    </div>
</template>
<script>
import Fetch from '~/until/fetch.js';
export default {
    props: {
        compet: {
            default: () => {
                return {}
            },
            type:Object
        }
    },
    data () {
        return {
            data:[],
            total:10
        }
    },
    mounted () {
        this.getData();
    },
    watch: {
        'compet.state':function(n,o){
            this.getData();
        },
        'compet.type':function(n,o){
            this.getData();
        },
        'compet.search':function(n,o){
            this.getData();
        },
        'compet.sort':function(n,o){
            this.getData();
        }
    },
    methods: {
        getData(page){
            let opt = this.compet;
            if(page){
                Object.assign(opt,{page});
            }
            Fetch.get('/api/competitions',{
                ...opt
            }).then(res=>{
                this.data = [...res.competitions];
                this.total = res.total;
                //console.log(res);
            })
        },
        time(num){
            let str = '';
            for(let i=0;i<num.length;i++){
                if(num[i] == 'T'){
                    str+=' ';
                }else if(num[i] == '.'){
                    break;
                }else{
                    str+=num[i]
                }
            }
            return str;
        },
        changeData(page){
            this.getData(page)
        }
    }
}
</script>
<style scoped>
.page{
    float:right;
}
a{
    text-decoration: none;
    color:#000;
}
.right{
    position: relative;
}
dl>span{
    position: absolute;
    right:0;
    top:30px;
    background-color: #59b2c3;
    color:#fff;
    padding:3px 20px;
}
.com-container{
    padding:10px 100px;
}
img{
    width:260px;
    height:180px;
    margin-right:20px;
}
dl{
    height:220px;
    padding:20px;
    border:1px solid #ccc;
    box-shadow: 0px 0px 5px #ccc;
    margin-bottom:20px;
    display:flex;
    position: relative;
}
dd{
    display:flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding-top:40px;
    width:80%;
    
}
h6{
    position: absolute;
    top:10px;
    left:0px;
}
h6{
    font-size:18px;
    font-weight: 600;
    cursor: pointer;
    margin-bottom:20px;
}
p{
    line-height: 3;
    color: #888;
    font-size:14px;
}
.type{
    margin-top:20px;
    display:inline-block;
    border:1px solid #ccc;
    padding: 3px 5px;
    font-size:12px;
}
.left{
    width:60%;
}
.right{
    height:100%;
}
.top{
    display:flex;
    padding:10px 10px 30px;
    justify-content: space-between;
}
.team,.money{
    display:flex;
    flex-direction: column;
    flex:1;
    text-align:center;
}
.team span,.money span{
    font-size:18px;
    font-weight: 600;
}
span.tit{
    font-size:12px;
    text-align: center;
    margin-bottom:10px;
    font-weight: 400;
}
.money{
    border-left:1px solid #ccc;
}
li{
    list-style:none;
    font-size:14px;
    color:#888;
}
</style>
