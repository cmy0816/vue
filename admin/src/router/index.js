import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
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
Router.beforeEach((to,from,next)=>{
  if(to.name === 'Login'){
    return next();
  };
  if(document.cookie.indexOf('user') == -1){
    return next('/login');
  }else{
    return next();
  }
})
