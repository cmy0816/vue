<template>
    <div class="wrap" v-if='data.name'>
        <img :src="data.background" class='bg'>
        <section>
            <li class='price'>
                <h4>{{data.name}}</h4>
                <span>{{data.price/100}}/{{data.productUnit}}</span>
            </li>
            <h6>{{data.title}}</h6>
            <div class="json">
                <div class="table">
                    <li v-for='(val,key,index) in JSON.parse(data.tag)' :key='index'>
                        <span>{{key}}</span> ：<span>{{val}}</span>
                    </li>
                </div>
                <button @click='showCar(data.id)' v-show='isShow === "false"?true:false'>加入购物车</button>
                <div class="car" v-show='isShow === "false"?false:true'>
                    <button @click='changeNum("-",data.id)'>-</button>
                    <span>{{num}}</span>
                    <button @click='changeNum("+",data.id)'>+</button>
                </div>
            </div>
            <div class="details">
                <h6>产品介绍：</h6>
                <p>{{data.details}}</p>
                <img :src="data.src">
            </div>
            <div class="nutr">
                <img :src="data.nutrition">
            </div>
        </section>
        <FooterNav/>
    </div>
</template>
<script>
    import {mapState} from 'vuex';
    import FooterNav from 'comp/FooterNav';
    export default{
        data(){
            return {
                data:{},
                id:this.$route.params.id,
            }
        },
        mounted() {
            //console.log(this.$store);
            this.$store.dispatch('A_GET_DATA');
            fetch('/api/detail?id='+this.$route.params.id).then(res=>{
                res.json().then(data=>{
                    if(window.localStorage.getItem('car')){
                        let car = JSON.parse(window.localStorage.getItem('car')).main;
                        for(let i=0;i<car.length;i++){
                            if(car[i].id === data.data.id){
                                data.data.limitBuyCount = car[i].limitBuyCount;
                                data.data.suggest = car[i].suggest;
                            }
                        }
                    }
                    this.data = data.data;
                })
            })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
        },
        computed:{
            isShow:function(){
                for(let i=0;i<this.$store.state.data.length;i++){
                    if(this.$store.state.data[i].id == this.id){
                        return this.$store.state.data[i].suggest
                    }
                }
            },
            num:function(){
                for(let i=0;i<this.$store.state.data.length;i++){
                    if(this.$store.state.data[i].id == this.id){
                        return this.$store.state.data[i].limitBuyCount
                    }
                }
            }
        },
        methods:{
            changeNum(type,index){
                switch (type) {
                    case "+":
                        this.$store.commit('ADD',{
                            small:index,
                        });
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
        },
        components:{
            FooterNav
        }
    }
</script>
<style scoped>
footer{
    position: fixed;
    bottom:0;
    left:0;
    background:#fff;
    width:100%;
}
.wrap{
    background:#eee;
    height:auto;
}
.bg{
    width:100%;
    height:auto;
}
section{
    width:80%;
    height:auto;
    margin: -50px auto 0;
    background:#fff;
    border-radius: 10px;
    padding:10px;
    overflow-y:initial;
}
h4{
    font-size:.22rem;
    color:#000;
    font-weight: 500;
}
.price{
    display:flex;
    justify-content: space-between;
}
.price span{
    font-size:.18rem;
    line-height: 1.5;
    color:#e50011;
}
h6{
    color:#e50011;
    font-sizE:.16rem;
    font-weight: 400;
    line-height: 2;
}
.json{
    display:flex;
    align-items: flex-end;
    justify-content: space-between;
}
.json button{
    margin-bottom:30px;
    padding:5px;
    border:0;
    color:#fff;
    background-color:#e50011;
    border-radius: 5px;
    outline: none;
}
.table{
    margin: 30px 0;
    padding:10px;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
}
.details h6{
    color:#979797;
    font-weight: 400;
    font-size:.14rem;
    text-align:left;
}
.details img{
    width:100%;
    height:auto;
    margin-top:30px;
}
.nutr{
    text-align: center;
}
.nutr img{
    width:90%;
    height:auto;
    margin-top:20px;
}
.details p{
    line-height: 1.5;
    text-align: left;
}
</style>

