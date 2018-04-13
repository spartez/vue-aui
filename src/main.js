import Vue from 'vue'
import App from './docs/App.vue'

import './main.css'
import 'highlightjs/styles/github-gist.css'

import './jquery-shim'

import "@atlassian/aui/dist/aui/css/aui.css"
import "@atlassian/aui/dist/aui/css/aui-experimental.css"
import "@atlassian/aui/dist/aui/js/aui.min"
import "@atlassian/aui/dist/aui/js/aui-experimental.min"
import "@atlassian/aui/dist/aui/js/aui-datepicker.min"
import "@atlassian/aui/dist/aui/js/aui-soy.min"

import VueAui from './VueAui'

import Welcome from './docs/Welcome.vue'

import ApiTable from './docs/ApiTable'
import SpinnerDocs from './docs/component/SpinnerDocs.vue'
import AvatarsDocs from './docs/component/AvatarsDocs.vue'
import BadgesDocs from './docs/component/BadgesDocs.vue'
import ButtonsDocs from './docs/component/ButtonsDocs.vue'
import Select2Docs from './docs/component/Select2Docs.vue'
import Dialog2Docs from './docs/component/Dialog2Docs.vue'
import IconsDocs from './docs/component/IconsDocs.vue'
import InlineDialogDocs from './docs/component/InlineDialogDocs.vue'
import LozengesDocs from './docs/component/LozengesDocs.vue'
import MessagesDocs from './docs/component/MessagesDocs'
import NavigationDocs from './docs/component/NavigationDocs.vue'
import ProgressIndicatorDocs from './docs/component/ProgressIndicatorDocs.vue'
import ProgressTrackerDocs from './docs/component/ProgressTrackerDocs.vue'
import TabsDocs from './docs/component/TabsDocs.vue'
import ToggleButtonDocs from './docs/component/ToggleButtonDocs.vue'
import TooltipDocs from './docs/component/TooltipDocs'

import VueHighlightJS from 'vue-highlightjs'
import VueRouter from 'vue-router'

Vue.use(VueHighlightJS);
Vue.use(VueAui);
Vue.use(VueRouter);

Vue.component('api-table', ApiTable);

Vue.config.ignoredElements = ['wrapper', 'aui-badge', 'aui-spinner'];

const router = new VueRouter({
  routes: [
    {path: '/', component: Welcome},
    {
      path: '/components/avatars', component: AvatarsDocs,
      meta: {
        componentName: 'AvatarsDocs',
        docsName: 'Avatars',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/avatars.html'
      }
    },
    {
      path: '/components/badges', component: BadgesDocs,
      meta: {
        componentName: 'BadgesDocs',
        docsName: 'Badges',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/badges.html'
      }
    },
    {
      path: '/components/buttons', component: ButtonsDocs,
      meta: {
        componentName: 'ButtonsDocs',
        docsName: 'Buttons',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/buttons.html'
      }
    },
    {
      path: '/components/select2', component: Select2Docs,
      meta: {
        componentName: 'Select2Docs',
        docsName: 'AUI Select2',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/auiselect2.html'
      }
    },
    {
      path: '/components/dialog2', component: Dialog2Docs,
      meta: {
        componentName: 'Dialog2Docs',
        docsName: 'Dialog 2',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/dialog2.html'
      }
    },
    {
      path: '/components/icons', component: IconsDocs,
      meta: {
        componentName: 'IconsDocs',
        docsName: 'Icons',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/icons.html'
      }
    },
    {
      path: '/components/inline-dialog', component: InlineDialogDocs,
      meta: {
        componentName: 'InlineDialogDocs',
        docsName: 'Inline Dialog',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/inline-dialog.html'
      }
    },
    {
      path: '/components/lozenges', component: LozengesDocs,
      meta: {
        componentName: 'LozengesDocs',
        docsName: 'Lozenges',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/lozenges.html'
      }
    },
    {
      path: '/components/messages', component: MessagesDocs,
      meta: {
        componentName: 'MessagesDocs',
        docsName: 'Messages',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/messages.html'
      }
    },
    {
      path: '/components/navigation', component: NavigationDocs,
      meta: {
        componentName: 'NavigationDocs',
        docsName: 'Navigation',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/navigation.html'
      }
    },
    {
      path: '/components/progress-indicator', component: ProgressIndicatorDocs,
      meta: {
        componentName: 'ProgressIndicatorDocs',
        docsName: 'Progress Indicator',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/progress-indicator.html'
      }
    },
    {
      path: '/components/progress-tracker', component: ProgressTrackerDocs,
      meta: {
        componentName: 'ProgressTrackerDocs',
        docsName: 'Progress Tracker',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/progress-tracker.html'
      }
    },
    {
      path: '/components/spinner', component: SpinnerDocs,
      meta: {
        componentName: 'AuiSpinnerDocs',
        docsName: 'Spinner',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/spinner.html'
      }
    },
    {
      path: '/components/tabs', component: TabsDocs,
      meta: {
        componentName: 'TabsDocs',
        docsName: 'Tabs',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/tabs.html'
      }
    },
    {
      path: '/components/toggle-button', component: ToggleButtonDocs,
      meta: {
        componentName: 'ToggleButtonDocs',
        docsName: 'Toggle Button',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/toggle-button.html'
      }
    },
    {
      path: '/components/tooltip', component: TooltipDocs,
      meta: {
        componentName: 'TooltipDocs',
        docsName: 'Tooltips',
        auiLink: 'https://docs.atlassian.com/aui/latest/docs/tooltips.html'
      }
    }
  ]
});

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
