import AuiNavVertical from './AuiNavVertical.vue'
import AuiNavVerticalTabs from './AuiNavVerticalTabs'

export default {
  props: {
    tabsMode: Boolean
  },

  render(createComponent) {
    if (this.tabsMode) {
      return createComponent(AuiNavVerticalTabs, this.$slots.default)
    } else {
      return createComponent(AuiNavVertical, this.$slots.default)
    }
  }
}
