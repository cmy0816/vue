<template>
    <div class="wrap">
            <ul>
                <li>
                    <span>头像</span>
                    <span>{{user.money}}></span>
                </li>
                <li>
                    <span>昵称</span>
                    <span>{{user.nickName}}</span>
                </li>
               
            </ul>
            <ul>
                 <li>
                    <span>绑定手机</span>
                    <span>{{user.mobile}}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>居住地</span>
                    <span>{{user.address}}></span>
                </li>
                <li>
                    <span>性别</span>
                    <span>{{user.sex}}</span>
                </li>
                <li>
                    <span>生日</span>
                    <span>{{user.birthday}}</span>
                </li>
            </ul>
            <ul>
                <li>
                    <span>从事行业</span>
                    <span>请选择职业</span>
                </li>
                <li>
                    <span>是否有小孩</span>
                    <span>{{user.kidAge}}</span>
                </li>
            </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                user:{}
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            getData(){
                fetch('/api/mine?id='+this.$route.params.id).then(res => {
                    res.json().then( data => {
                        if(data.code == 1){
                            this.user = data.data;
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
ul{
    margin-bottom:.1rem;
}
</style>
