<template>
    <div class="car" v-show='show' @click.stop='close'>
        <div class="carContent">
            <ul>
                <li  v-for='(data,index) in $store.getters.CAR' :key='index'>
                    <h6>{{data.name}}</h6>
                    <div class='btn'>
                        <button @click.stop='changeNum("-",data.id)'>-</button>
                        <span>{{data.limitBuyCount}}</span>
                        <button @click.stop='changeNum("+",data.id)'>+</button>
                    </div>
                </li>
            </ul>
            <div class="footer">
                <span><a>{{num}}</a>盒商品</span><br/>
                <span>合计<a>￥{{pic/100}}</a></span>
                <button>还差90.00元起送</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            show:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            close(){
                this.$emit('update:show',false);
            },
            changeNum(type,big){
                switch (type) {
                    case "+":
                        this.$store.commit('ADD',{
                            small:big
                        })
                        break;
                    case '-':
                        this.$store.commit('SUB',{
                            small:big
                        })
                        break;
                }
            },
        },
        computed:{
            num:function(){
                let num =0;
                this.$store.getters.CAR.forEach(ele => {
                    num += ele.limitBuyCount;
                });
                return num;
            },
            pic:function(){
                let pic = 0;
                this.$store.getters.CAR.forEach(ele => {
                    pic += ele.limitBuyCount * ele.price
                });
                return pic;
            }
        }
    }
</script>
<style scoped>
.footer>button{
    float:right;
    margin-right:20px;
    border:0;
    padding:5px;
    color:#fff;
    background-color:#e50011;
    border-radius: 5px;
    outline: none;
}
span>a{
    color:#e50011;
}
.car{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,.6);
    display:flex;
    flex-direction: column-reverse;
    z-index: 100;
}
.carContent{
    margin:10px;
    border:10px;
    background:#fff;
    border-radius: 20px;
}
.btn button{
    margin-bottom:30px;
    padding:5px;
    border:0;
    color:#fff;
    background-color:#e50011;
    border-radius: 5px;
    outline: none;
}
ul{
    padding:.1rem;
}
h6{
    color:#979797;
    font-weight: 400;
    font-sizE:.14rem;
}
ul>li{
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content: space-between;
    height:.4rem;
}
</style>
