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
      this.options = this.$slots.default && this.$slots.default
        .filter(vnode => vnode.tag && (vnode.tag.match(/aui-select2-option$/) || vnode.tag.match(/AuiSelect2Option$/)))
        .map(vnode => vnode.componentOptions.propsData)
        .map(props => ({...props, id: props.value}))
      this.updateValue()
    },

    onSelect2ValueChanged(event) {
      this.$emit('input', event.val)
    },

    renderTemplate(option, render) {
      return render
        ? new Vue({render: h => render(option)}).$mount().$el.outerHTML
        : option.text;
    }
  }
}
