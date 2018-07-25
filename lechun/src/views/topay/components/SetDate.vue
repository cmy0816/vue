<template>
    <div class="mark" @click.stop='close' v-show='isShow'>
        <div class="time">
            <h5>选择配送日期</h5>
            <div class="dateAll">
                <span></span>
            </div>
            <button>确定</button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isShow:{
            default:false,
            type:Boolean
        }
    },
    data(){
        return {
            day:[]
        }
    },
    mounted() {
        
    },
    methods:{
        close(){
            this.$emit('update:isShow',false);
        },
        getDay(){
            let arr=[];
            let week=['一','二','三','四','五','六','日'];
            let today = new Date().getDay();
            
        }
    }
}
</script>
<style scoped>
button{
    margin: 10px 5%;
    width:90%;
    line-height: 2;
    color:#fff;
    border:0;
    outline: none;
    background-color:rgb(229, 0, 17);
    font-size: 16px;
}
.mark{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.4);
    z-index: 1000;
}
.time{
    margin:30px auto 0;
    background:#fff;
    width:80%;
}
</style>

