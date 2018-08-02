import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () =>
        import ('../layout/Index.layout.vue')
    },{
      path:'/login',
      name:"Login",
      component: () => 
        import('../layout/login.layout.vue')
    }
  ]
});
router.beforeEach((to,from,next)=>{
  if(to.name === 'Login'){
    return next();
  };
  console.log(document.cookie);
  if(document.cookie.indexOf('user') == -1){
    return next('/login?successUrl='+to.path);
  }else{
    return next();
  }
})
export default router
