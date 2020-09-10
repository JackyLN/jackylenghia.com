import Vue from 'vue'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


import App from './App.vue'
import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{
    path: '/', name: 'foo', component: Foo
  },
  {
    path: '/bar', name: 'bar', component: Bar
  }]
})

new Vue({
  el:'#app',
  render:h=>h(App),
  router
})

