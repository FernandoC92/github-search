import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import ResultSearch from './views/ResultSearch.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/result/:userName', name: 'result', component: ResultSearch }
]

const router = new VueRouter({
    routes
  })

export default router

