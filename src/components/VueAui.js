import AuiToggleButton from './AuiToggleButton.vue'
import AuiSelect2Single from './AuiSelect2Single.vue'
import AuiSelect2Option from './AuiSelect2Option.vue'

export default {
  install(Vue, options) {
    Vue.component('aui-select2-single', AuiSelect2Single)
    Vue.component('aui-select2-option', AuiSelect2Option)
    Vue.component('aui-toggle-button', AuiToggleButton)
  }
}
