import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path:'/home',
      name:'Home',
      component: () =>
        import ('views/home')
    },{
      path:'/cart',
      name:'Cart',
      redirect:'/cart/list',
      component: () =>
        import ('views/cart'),
      children:[{
        path:'list',
        name:'CartList',
        component: () =>
          import ('views/cart/list')
      }]
    },{
      path:'/user',
      name:"User",
      redirect:'/user/zoom',
      component: () =>
        import ('views/user'),
      children:[{
        path:'zoom',
        name:'UserZoom',
        component: () =>
          import ('views/user/zoom')
      }]
    },{
      path:'/chart',
      name:'Chart',
      component:()=>import ('views/chart')
    }
  ]
})
