<template>
    <div class="wrap">
        <li>
            <router-link tag='span' :to='{path:`/mine/${this.$route.params.id}`}'>个人信息</router-link>
            <span>></span>
        </li>
        <li>
            <span>绑定手机号</span>
            <span>{{this.tel}}></span>
        </li>
        <li>
            <span>支付密码</span>
            <span>></span>
        </li>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tel:''
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            getData(){
                fetch('/api/user/add?id='+this.$route.params.id).then(res=>{
                    res.json().then(data => {
                        if(data.code === 1){
                            this.tel = data.data;
                        }
                    })
                })
            }
        }
    }
</script>
<style scoped>
li{
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem;
    border-bottom:1px solid #ccc;
    color:#999;
    background:#fff;
}
</style>
