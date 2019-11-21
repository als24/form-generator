import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
// import VueCodemirror from 'vue-codemirror';
// import 'codemirror/lib/codemirror.css';
import '@/style/index.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(VueCodemirror);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
