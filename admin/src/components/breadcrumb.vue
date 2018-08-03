<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item  
            v-if='item.meta&&($route.path.indexOf(item.path)!==-1)' 
            :to="{ path:`${item.path}` }" 
            v-for='(item,index) in $router.options.routes' 
            :key='index'
        >
        {{item.meta&&item.meta.title}}
        </el-breadcrumb-item>
        <el-breadcrumb-item v-if='$route.meta.child' :to="{ path:`${$route.path}` }" >{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
</template>
