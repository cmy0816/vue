<template>
<el-menu :default-openeds="['1', '3']">
      <div class="logo el-submenu__title">
        <img src="../../static/timg.jpg" alt="">
      </div>
      <router-link :to="item.path" v-for='(item,index) in menu' :key='index'>
        <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          {{item.meta.title}}
        </template>
        <router-link :to='item.path+"/"+items.path' 
                      v-if='item.children' 
                      v-for='(items,indey) in item.children' 
                     :key='indey'>
          <el-menu-item-group :title='items.meta.title'>
                <!-- <el-menu-item  index="1-1" >
                </el-menu-item> -->
           </el-menu-item-group>
        </router-link>
        </el-submenu>
      </router-link>
</el-menu>
</template>

<script>
export default {
    mounted() {
    },
    computed:{
        menu(){
            const list = (routes)=>{
               return routes.filter((item,index)=>{
                    if(item.children){
                        routes[index].children = list(item.children);
                    }
                    return item.meta && item.meta.isMenu
                })
            };
            return list(this.$router.options.routes);
        }
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
}
.logo{
    height:auto;
    padding:10px;
}
.logo img{
    width:45%;
    height:auto;
}
</style>

