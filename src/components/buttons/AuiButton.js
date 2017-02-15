export default {

  render(createComponent) {
    const attrs = {
      disabled: this.disabled,
      href: this.href
    };
    const elementType = this.href ? 'a' : 'button'
    return createComponent(elementType, {
      class: this.classObject,
      attrs
    }, this.$slots.default)
  },

  props: {
    compact: Boolean,
    disabled: Boolean,
    href: String,
    light: Boolean,
    subtle: Boolean,
    type: {
      type: String,
      validator(value) {
        return 'primary' === value
          || 'link' === value
      }
    },
  },

  computed: {
    classObject() {
      return {
        'aui-button': true,
        'aui-button-primary': this.type === 'primary',
        'aui-button-link': this.type === 'link',
        'aui-button-light': this.light,
        'aui-button-subtle': this.subtle,
        'aui-button-compact': this.compact,
      }
    }
  },
}
