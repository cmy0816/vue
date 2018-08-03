import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect:'/home',
    },{
      path:'/login',
      name:"Login",
      component: () => 
        import('../layout/login.layout.vue')
    },{
      path:'/home',
      name:'home',
      meta:{
        title:'首页',
        isMenu:true
      },
      component: () =>
        import('@/views/home')
    },{
      path: '/product',
      name:'Product',
      redirect:'/product/list',
      meta:{
        title:'商品管理',
        isMenu:true
      },
      component:() =>
        import('@/views/product'),
      children:[{
        path:'list',
        name:'ProductList',
        meta:{
          title:'商品列表',
          isMenu:true,
          child:true
        },
        component:() =>
         import('@/views/product/list')
      },{
        path: 'add',
        name: 'ProductAdd',
        meta:{
          title:'添加商品',
          isMenu:true,
          child:true
        },
        component: () =>
        import ('@/views/product/add')
      }]
    }
  ]
});
router.beforeEach((to,from,next)=>{
  if(to.name === 'Login'){
    return next('/');
  };
  if(document.cookie.indexOf('user') == -1){
    return next('/?successUrl='+to.path);
  }else{
    return next();
  }
})
export default router
