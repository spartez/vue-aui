export default {

  render(createComponent) {
    const iconName = this.$slots.default[0].text;
    const iconClass = iconName === 'wait'
      ? 'aui-icon-wait'
      : 'aui-iconfont-' + iconName;
    const sizeClass = 'aui-icon-' + this.size;
    return createComponent('span', {
      class: ['aui-icon', iconClass, sizeClass],
      style: `color: ${this.color}`
    })
  },

  props: {
    size: {
      type: String,
      validator(value) {
        return ['small', 'large'].indexOf(value) >= 0
      },
      default: 'small'
    },
    color: String
  },

  computed: {
    classObject() {
      return ['aui-icon', 'aui-icon-' + this.$slots.default[0].text]
    }
  }
}
