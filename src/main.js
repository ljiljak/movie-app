import Vue from 'vue'
import App from './App.vue'

import HelloWorld from './components/HelloWorld.vue'

import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
	{ path: '/', redirect: '/HelloWorld' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
}) 

new Vue({
	router,
  render: h => h(App)
}).$mount('#app')
