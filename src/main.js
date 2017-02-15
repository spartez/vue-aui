import './main.css'

import Vue from 'vue'
import App from './docs/App'

import VueAui from './components/VueAui'

import Welcome from './docs/Welcome.vue'

import Buttons from './docs/component/Buttons.vue'
import Select2 from './docs/component/Select2.vue'
import Dialog2 from './docs/component/Dialog2.vue'
import Navigation from './docs/component/Navigation.vue'
import Tabs from './docs/component/Tabs.vue'
import ToggleButton from './docs/component/ToggleButton.vue'

import VueHighlightJS from 'vue-highlightjs'
import VueRouter from 'vue-router'

Vue.use(VueHighlightJS)
Vue.use(VueAui)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: Welcome},
    {path: '/components/buttons', component: Buttons, meta: {docsName: "Buttons"}},
    {path: '/components/select2', component: Select2, meta: {docsName: "AUI Select2"}},
    {path: '/components/dialog2', component: Dialog2, meta: {docsName: "Dialog 2"}},
    {path: '/components/navigation', component: Navigation, meta: {docsName: "Navigation"}},
    {path: '/components/tabs', component: Tabs, meta: {docsName: "Tabs"}},
    {path: '/components/toggle-button', component: ToggleButton, meta: {docsName: "Toggle Button"}}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
