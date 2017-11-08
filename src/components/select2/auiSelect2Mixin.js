import Vue from 'vue'

export default {

  data() {
    return {
      options: []
    }
  },

  created() {
    this.updateOptions()
    this.$on('optionsChanged', this.updateOptions)
  },

  mounted() {
    this.$refs.input.className = this.$el.className
    this.$el.className = ''

    this.$input = AJS.$(this.$refs.input)
  },

  methods: {
    updateValue() {
      if (this.$input) {
        this.$input.auiSelect2('val', this.value)
      }
    },

    updateOptions() {
      this.options = this.$slots.default && this.$slots.default
        .filter(vnode => vnode.tag && (vnode.tag.match(/aui-select2-option$/) || vnode.tag.match(/AuiSelect2Option$/)))
        .map(vnode => vnode.componentOptions.propsData)
        .map(props => ({...props, id: props.value}))
      this.updateValue()
    },

    renderTemplate(option, render) {
      return render
        ? new Vue({render: h => render(option)}).$mount().$el.outerHTML
        : option.text;
    }
  }
}
