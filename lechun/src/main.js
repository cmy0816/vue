// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
Vue.config.productionTip = false
import './static/js/font'
import './static/css/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */ )
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
const decludeRouter = ['Home','Login','Detail']
router.beforeEach((to,from,next)=>{
  if(decludeRouter.indexOf(to.name)!= -1){
    next();
    return;
  }
  if(document.cookie.indexOf('msg') === -1){
    next('/login?successUrl='+to.path);
  }else{
    next();
  }
})