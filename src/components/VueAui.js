import AuiToggleButton from './AuiToggleButton.vue'
import AuiSelect2Single from './AuiSelect2Single.vue'
import AuiSelect2Multi from './AuiSelect2Multi.vue'
import AuiSelect2Option from './AuiSelect2Option.vue'
import AuiDialog from './AuiDialog.vue'
import AuiTabs from './AuiTabs.vue'
import AuiTab from './AuiTab.vue'

export default {
  install(Vue, options) {
    Vue.component('aui-select2-single', AuiSelect2Single)
    Vue.component('aui-select2-multi', AuiSelect2Multi)
    Vue.component('aui-select2-option', AuiSelect2Option)
    Vue.component('aui-toggle-button', AuiToggleButton)
    Vue.component('aui-dialog', AuiDialog)
    Vue.component('aui-tabs', AuiTabs)
    Vue.component('aui-tab', AuiTab)
  }
}
