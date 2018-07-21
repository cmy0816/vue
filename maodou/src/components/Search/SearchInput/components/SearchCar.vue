<template>
    <div class="SearchCar" v-show='visibility'>
        <div class="input">
            <input type="text" placeholder="点击搜索" ref='input' v-model='searchValue' @keyup.13="searchEnter">
            <span @click='show'>取消</span>
            <span class="remove" @click='remove'>×</span>
        </div>
        <table>
            <tr v-for='(items,index) in data' :key='index'>
                <td v-for='(item,indey) in items.main' :key='indey' @click='$store.dispatch("ADD",item)'>{{item}}</td>
            </tr>
        </table>
        <ul class="host">
            <li v-for='(item,index) in $store.state.list' :key='index'>{{item.data}}<span @click='$store.dispatch("REMOVE",item.id)'>删除</span></li>
        </ul>
    </div>
</template>
<script>
    export default {
        methods(){

        },
        data(){
            return {
                data:[{
                    main:["别克英朗","自由光","起亚K2"]
                },{
                    main:["别克","福特","长安"]
                },{
                    main:["SUV","两厢车","三厢车"]
                }],
                searchValue:''
            }
        },
        props:{
            visibility:{
                type:Boolean,
                default:false
            }
        },
        mounted() {
            this.$store.dispatch('ADD');
        },
        methods:{
            show(){
                this.$emit('update:visibility', false)
            },
            search(val){
                console.log('我要开始搜索了'+val);
                this.$store.dispatch('ADD',val);
            },
            remove(){
                this.$refs['input'].value='';
            },
            searchEnter(){
                this.$store.dispatch('ADD',this.searchValue);
                this.searchValue=''
            }
        },
        updated() {
            this.$refs['input'].focus();
        },
        watch:{
            searchValue(newVal,oldVal){
                clearTimeout(this.timeOut);
                this.searchTime = +new Date();
                this.timeOut=setTimeout(() => {
                    this.search(newVal);
                }, 500);
            }
        }
    }
</script>
<style scoped>
    .SearchCar{
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index: 10;
        background-color:#f5f5f5;
    }
    .input{
        display:flex;
        padding:.1rem;
        background-color:#fff;
        position: relative;
    }
    .input>span.remove{
        position: absolute;
        top:50%;
        right:.7rem;
        margin-top:-.1rem;
        width:.2rem;
        height:.2rem;
        border-radius: 50%;
        color:#fff;
        background:#ccc;
        line-height: 1.3;
        text-align: center;
    }
    .input>input{
        flex:1;
        border:0;
        background:#f5f5f5;
        border-radius: .2rem;
        margin-right:.2rem;
        height:.35rem;
        padding-left:.2rem;
        outline: none;
    }
    input::-webkit-input-placeholder {
        color:#ccc;
        font-size:.16rem;
    }
    .input span{
        line-height: 2;
        font-size:.16rem;
        color:#000;
    }
    table{
        width:100%;
        text-align: center;
    }
    td{
        padding: .1rem 0;
        background:#fff;
        color:#000;
    }
</style>
