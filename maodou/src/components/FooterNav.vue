<template>
        <footer>
            <router-link  v-for='(item,index) in router' :key=index :to=item.path>
                <img :src=item.src >
                <span>{{item.name}}</span>
            </router-link>
        </footer>
</template>
<script>
import '../static/scss/home.min.css'
    export default {
        data(){
            return {
                router:[{
                    path:'/home',
                    name:"首页",
                    src:"https://sta.maodou.com/xinche_wap/static/images/Home2@2x.49c26df7.png"
                },{
                    path:"/cart",
                    name:"选车",
                    src:"https://sta.maodou.com/xinche_wap/static/images/choose1@2x.8c06f9c2.png"
                },{
                    path:"/chart",
                    name:"咨询",
                    src:"https://sta.maodou.com/xinche_wap/static/images/service1@2x.441b0c28.png"
                },{
                    path:"/user",
                    name:"我的",
                    src:"https://sta.maodou.com/xinche_wap/static/images/profiel1@2x.8b9704ee.png"
                }]
            }
        }
    }
</script>


