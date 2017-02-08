import './main.css'

import Vue from 'vue'
import App from './docs/App'

import VueAui from './components/VueAui'
import Buttons from './docs/component/Buttons.vue'
import Selects from './docs/component/Selects.vue'
import Dialogs from './docs/component/Dialogs.vue'
import Welcome from './docs/Welcome.vue'

import VueHighlightJS from 'vue-highlightjs'
import VueRouter from 'vue-router'

Vue.use(VueHighlightJS)
Vue.use(VueAui)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Welcome},
    {path: '/components/buttons', component: Buttons},
    {path: '/components/dialogs', component: Dialogs},
    {path: '/components/selects', component: Selects}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
