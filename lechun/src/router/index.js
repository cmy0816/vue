import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    }, {
      path: '/home',
      name:'Home',
      component: () => import('#/home')
    },{
      path:'/user',
      name:'User',
      component:()=>import('#/user')
    },{
      path:'/login',
      name:'Login',
      component:()=>import('#/login')
    },{
      path: '/detail/:id',
        name: 'Detail',
        component: () =>
        import ('#/detail')
    },{
      path:'/user/:id',
      name:'add',
      component:() => import('#/user/views/add/index.vue')
    },{
      path:'/mine/:id',
      name:'mine',
      component: () => import('#/user/views/mine/index.vue')
    }
  ]
});
export default router;


