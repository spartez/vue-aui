import Vue from 'vue'
import App from './docs/App'

import VueAui from './components/VueAui'
import Components from './docs/Components.vue'
import Welcome from './docs/Welcome.vue'
import VueRouter from 'vue-router'

Vue.use(VueAui)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Welcome},
    {path: '/components', component: Components}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
