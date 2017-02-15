import AuiButton from './buttons/AuiButton'

import AuiToggleButton from './buttons/AuiToggleButton.vue'
import AuiSelect2Single from './select2/AuiSelect2Single.vue'
import AuiSelect2Multi from './select2/AuiSelect2Multi.vue'
import AuiSelect2Option from './select2/AuiSelect2Option.vue'

import AuiDialog from './AuiDialog.vue'

import AuiTabs from './tabs/AuiTabs.vue'
import AuiTab from './tabs/AuiTab.vue'

import AuiNavItem from './navigation/AuiNavItem.vue'
import AuiNavHeader from './navigation/AuiNavHeader.vue'
import AuiNavGroup from './navigation/AuiNavGroup.vue'
import AuiNavTab from './navigation/AuiNavTab.vue'
import AuiNavVerticalRouter from './navigation/AuiNavVerticalRouter.js'

export default {
  install(Vue, options) {
    Vue.component('aui-button', AuiButton)
    Vue.component('aui-select2-single', AuiSelect2Single)
    Vue.component('aui-select2-multi', AuiSelect2Multi)
    Vue.component('aui-select2-option', AuiSelect2Option)
    Vue.component('aui-toggle-button', AuiToggleButton)
    Vue.component('aui-dialog', AuiDialog)
    Vue.component('aui-tabs', AuiTabs)
    Vue.component('aui-tab', AuiTab)
    Vue.component('aui-nav-item', AuiNavItem)
    Vue.component('aui-nav-header', AuiNavHeader)
    Vue.component('aui-nav-group', AuiNavGroup)
    Vue.component('aui-nav-tab', AuiNavTab)
    Vue.component('aui-nav-vertical', AuiNavVerticalRouter)
  }
}
