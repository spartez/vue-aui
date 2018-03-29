import Vue from 'vue'
import App from './docs/App.vue'

import './main.css'

import "@atlassian/aui/dist/aui/css/aui.css"
import "@atlassian/aui/dist/aui/css/aui-experimental.css"
import "@atlassian/aui/dist/aui/js/aui.min"
import "@atlassian/aui/dist/aui/js/aui-experimental.min"
import "@atlassian/aui/dist/aui/js/aui-datepicker.min"
import "@atlassian/aui/dist/aui/js/aui-soy.min"

import VueAui from './VueAui'

import Welcome from './docs/Welcome.vue'

import ApiTable from './docs/ApiTable'
import AuiSpinner from './docs/component/SpinnerDocs.vue'
import Avatars from './docs/component/AvatarsDocs.vue'
import Badges from './docs/component/BadgesDocs.vue'
import Buttons from './docs/component/ButtonsDocs.vue'
import Select2 from './docs/component/Select2Docs.vue'
import Dialog2 from './docs/component/Dialog2Docs.vue'
import Icons from './docs/component/IconsDocs.vue'
import InlineDialog from './docs/component/InlineDialogDocs.vue'
import Lozenges from './docs/component/LozengesDocs.vue'
import Messages from './docs/component/MessagesDocs'
import Navigation from './docs/component/NavigationDocs.vue'
import ProgressIndicator from './docs/component/ProgressIndicatorDocs.vue'
import Tabs from './docs/component/TabsDocs.vue'
import ToggleButton from './docs/component/ToggleButtonDocs.vue'
import Tooltip from './docs/component/TooltipDocs'

import VueHighlightJS from 'vue-highlightjs'
import VueRouter from 'vue-router'

Vue.use(VueHighlightJS)
Vue.use(VueAui)
Vue.use(VueRouter)

Vue.component('api-table', ApiTable);

Vue.config.ignoredElements = ['wrapper', 'aui-badge']

const router = new VueRouter({
  routes: [
    {path: '/', component: Welcome},
    {
      path: '/components/avatars', component: Avatars,
      meta: {
        componentName: 'AvatarsDocs',
        docsName: 'Avatars',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/avatars.html'
      }
    },
    {
      path: '/components/badges', component: Badges,
      meta: {
        componentName: 'BadgesDocs',
        docsName: 'Badges',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/badges.html'
      }
    },
    {
      path: '/components/buttons', component: Buttons,
      meta: {
        componentName: 'ButtonsDocs',
        docsName: 'Buttons',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/buttons.html'
      }
    },
    {
      path: '/components/select2', component: Select2,
      meta: {
        componentName: 'Select2Docs',
        docsName: 'AUI Select2',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/auiselect2.html'
      }
    },
    {
      path: '/components/dialog2', component: Dialog2,
      meta: {
        componentName: 'Dialog2Docs',
        docsName: 'Dialog 2',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/dialog2.html'
      }
    },
    {
      path: '/components/icons', component: Icons,
      meta: {
        componentName: 'IconsDocs',
        docsName: 'Icons',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/icons.html'
      }
    },
    {
      path: '/components/inline-dialog', component: InlineDialog,
      meta: {
        componentName: 'InlineDialogDocs',
        docsName: 'Inline Dialog',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/inline-dialog.html'
      }
    },
    {
      path: '/components/lozenges', component: Lozenges,
      meta: {
        componentName: 'LozengesDocs',
        docsName: 'Lozenges',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/lozenges.html'
      }
    },
    {
      path: '/components/messages', component: Messages,
      meta: {
        componentName: 'MessagesDocs',
        docsName: 'Messages',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/messages.html'
      }
    },
    {
      path: '/components/navigation', component: Navigation,
      meta: {
        componentName: 'NavigationDocs',
        docsName: 'Navigation',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/navigation.html'
      }
    },
    {
      path: '/components/progress-indicator', component: ProgressIndicator,
      meta: {
        componentName: 'ProgressIndicatorDocs',
        docsName: 'Progress Indicator',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/progress-indicator.html'
      }
    },
    {
      path: '/components/spinner', component: AuiSpinner,
      meta: {
        componentName: 'AuiSpinnerDocs',
        docsName: 'Spinner',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/spinner.html'
      }
    },
    {
      path: '/components/tabs', component: Tabs,
      meta: {
        componentName: 'TabsDocs',
        docsName: 'Tabs',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/tabs.html'
      }
    },
    {
      path: '/components/toggle-button', component: ToggleButton,
      meta: {
        componentName: 'ToggleButtonDocs',
        docsName: 'Toggle Button',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/toggle-button.html'
      }
    },
    {
      path: '/components/tooltip', component: Tooltip,
      meta: {
        componentName: 'TooltipDocs',
        docsName: 'Tooltips',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/tooltips.html'
      }
    }
  ]
})

router.afterEach((to, from) => {
  if (location.hostname !== 'localhost') {
    ga('send', 'pageview', {
      'page': location.pathname + location.search + location.hash
    });
  }
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
