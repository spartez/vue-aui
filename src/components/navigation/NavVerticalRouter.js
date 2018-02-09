import AuiNavVertical from './NavVertical.vue'
import AuiNavVerticalTabs from './NavVerticalTabs'

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
