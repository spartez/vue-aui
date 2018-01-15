import Vue from 'vue'

export default {

  props: {
    disabled: Boolean,
    dropdownAutoWidth: Boolean,
    initSelection: Function,
    maximumInputLength: Number,
    minimumInputLength: Number,
    placeholder: String,
    query: Function,
    width: String,
  },

  data() {
    return {
      options: []
    }
  },

  computed: {
    commonOptions() {
      return {
        dropdownAutoWidth: this.dropdownAutoWidth,
        formatResult: option => this.renderTemplate(option, this.$scopedSlots.formatResult),
        formatSelection: option => this.renderTemplate(option, this.$scopedSlots.formatSelection),
        initSelection: this.initSelection,
        maximumInputLength: this.maximumInputLength,
        minimumInputLength: this.minimumInputLength,
        placeholder: this.placeholder,
        query: this.query,
        width: this.width,
      }
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
    this.$input.on('change', this.onSelect2ValueChanged)
  },

  watch: {
    value() {
      this.updateValue();
    },
    disabled() {
      this.updateValue();
    }
  },

  methods: {
    updateValue() {
      if (this.$input) {
        this.$input.auiSelect2('val', this.value)
      }
    },

    updateOptions() {
      if (this.$slots.default) {
        this.options = this.$slots.default
          .filter(vnode => vnode.tag && (vnode.tag.match(/aui-select2-option$/) || vnode.tag.match(/AuiSelect2Option$/)))
          .map(vnode => vnode.componentOptions.propsData)
          .map(props => ({...props, id: props.value}))
      }
      this.updateValue()
    },

    mapToOriginalVal(stringValue) {

      function getOption(options, stringValue){
        for (let i = 0; i < options.length; i++) {
          let option = options[i]
          if (`${option.value}` === stringValue){
            return option
          }
        }
      }

      const original = getOption(this.options, stringValue);
      return original && original.value || stringValue;
    },

    onSelect2ValueChanged(event) {
      const original = typeof event.val === 'string'
        ? this.mapToOriginalVal(event.val)
        : event.val.map(this.mapToOriginalVal)
      this.$emit('input', original)
    },

    renderTemplate(option, renderOption) {
      if (renderOption) {
        // For some reason directly returning VNode rendered by render function from different project doesn't work
        const rendererComponent = new Vue({render: h => h('wrapper', [renderOption(option)])});
        const optionElement = rendererComponent.$mount().$el.firstChild;
        return optionElement.outerHTML;
      } else {
        return option.text;
      }
    }
  }
}
