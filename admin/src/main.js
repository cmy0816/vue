// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import store from './store/index';
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor);
Vue.use(Element, {
  size: 'small',
  zIndex: 3000
});

import ECharts from 'vue-echarts/components/ECharts.vue'　　
import 'echarts/lib/chart/Sunburst'
import 'echarts/lib/component/tooltip'　　
Vue.component('chart', ECharts)
import 'element-ui/lib/theme-chalk/index.css';
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
