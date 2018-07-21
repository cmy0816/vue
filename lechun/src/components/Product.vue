<template>
    <div class="product">
        <dl>
            <router-link :to='{path:`/detail/${data.id}`}'>
                <img :src=data.picSmall>
            </router-link>
            <dd>
                <h6>{{data.proTitle}}</h6>
                <p>{{data.proSummary}}</p>
            </dd>
        </dl>
        <h6>￥{{data.price/100}}/{{data.productUnit}}</h6>
        <span @click="showCar(data.id)" class='showCar' v-show='data.suggest ==="false"?true:false'></span>
        <div class="car" v-show='data.suggest ==="false"?false:true'>
            <button @click='changeNum("-",data.id)'>-</button>
            <span>{{Number(data.limitBuyCount)}}</span>
            <button @click='changeNum("+",data.id)'>+</button>
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            data:{
                type:Object,
                default:()=>{
                    return {}
                }
            },
            big:{
                type:Number,
                default:0
            }
        },
        methods:{
            changeNum(type,index){
                switch (type) {
                    case "+":
                        this.$store.commit('ADD',{
                            small:index,
                        })
                        break;
                    case '-':
                        this.$store.commit('SUB',{
                            small:index,
                        })
                        break;
                }
            },
            showCar(index){
                this.$store.commit('SHOW_CAR',{
                    small:index,
                    isShow:true
                });
            },
            detail(){

            }
        }
    }
</script>
<style scoped>
 .car button{
    width: .22rem;
    height: .22rem;
    border: 1px solid #e50011;
    border-radius: .16rem;
    display: inline-block;
    text-align: center;
    line-height: .18rem;
    font-style: normal;
    font-size: .2rem;
    background:#fff;
    outline:none;
}

.showCar{
    display:inline-block;
    width: .34rem;
    height: .34rem;
    border-radius: .32rem;
    background: #e50011 url('https://m.lechun.cc//images/icon/icon-sku-cart.png') center center no-repeat;
    background-size: .2rem .2rem;
    color: rgba(255, 255, 255, 0);
    float:right;
}
p{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top:.1rem;
}
.product{
    width:47%;
    background:#fff;
    height:2.5rem;
    padding-left:2%;
}
img{
    width:60%;
    height:auto;
    text-align: center;
}
dt{
    text-align: center;
}
dd>h6{
    color:#000;
    font-size:.16rem;
    line-height: 1.5;
}
p{
    font-size:.12rem;
    color:#999;
}
h6{
    color:#e50011;
}
dd{
    height:.7rem;
}
</style>
