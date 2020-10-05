import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/styles/global.scss'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


