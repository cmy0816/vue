<template>
<div class="wrap">
  <el-aside width="200px" style="background-color: rgb(0,21,42)">
      <Menu/>
  </el-aside>
  <el-container>
    <div class="header">
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item @click.native='logOff'>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{$store.state.isLogin&&$store.state.isLogin.user}}</span>
          <img :src="$store.state.isLogin&&$store.state.isLogin.src" alt=""/>
        </el-header>
        <Breadcrumb/>
    </div>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </div>
</template>
<style>
.logo{
  text-align: center;
}
  .el-header {
    color: #333;
    line-height: 60px;
  }
  .el-menu{
    background-color:#fff;
  }
  .el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{
    background-color:rgb(24,144,254);
  }
  .el-menu-item-group__title{
    color:rgb(123,135,149)
  }
  .el-menu-item{
    color:rgb(91,109,125);
  }
  .el-submenu__title {
    color: rgb(165,205,245);
  }
  .el-aside{
    position: fixed;
    top:0;
    left:0;
    z-index: 101;
  }
  .is-vertical{
    padding-left:200px;
    box-sizing: content-box;
  }
  .header{
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    width:100%;
    background:#fff;
    border-bottom:1px solid #ccc;
  }
  .el-main{
    margin-top:60px;
    margin-left:200px;
  }
  img{
    width:30px;
    height:30px;
    border-radius: 50%;
    margin-top:15px;
  }
  .el-breadcrumb{
    margin-left:200px;
  }
</style>

<script>
import Breadcrumb from '../components/breadcrumb'
import Menu from '../components/menu.vue';
export default {
  methods:{
    logOff(){
      document.cookie = '';
      window.localStorage.clear();
      window.location.href = '/';
    }
  },
  components:{Menu,Breadcrumb},
}
</script>