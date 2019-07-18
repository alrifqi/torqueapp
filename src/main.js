import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueSidebarMenu from 'vue-sidebar-menu'
import axios from 'axios'
import VueAxios from 'vue-axios';


import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueSidebarMenu)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App)
}).$mount('#app')
