import AuiNavVertical from './AuiNavVertical.vue'
import AuiNavVerticalTabs from './AuiNavVerticalTabs'

export default {
  props: {
    tabsMode: Boolean
  },

  functional: true,

  render(createComponent, context) {
    if (context.props.tabsMode) {
      return createComponent(AuiNavVerticalTabs, context.data, context.children)
    } else {
      return createComponent(AuiNavVertical, context.data, context.children)
    }
  }
}
