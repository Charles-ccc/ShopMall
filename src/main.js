// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Layout from './components/layout'
import IndexPage from './pages/index'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: "/",
      component: IndexPage
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
