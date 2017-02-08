import './main.css'

import Vue from 'vue'
import App from './docs/App'

import VueAui from './components/VueAui'

import Welcome from './docs/Welcome.vue'
import Buttons from './docs/component/Buttons.vue'
import Dialogs from './docs/component/Dialogs.vue'
import Selects from './docs/component/Selects.vue'
import Tabs from './docs/component/Tabs.vue'

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
    {path: '/components/selects', component: Selects},
    {path: '/components/tabs', component: Tabs}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
