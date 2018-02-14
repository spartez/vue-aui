import Select2Single from './Select2Single'
import Select2Multi from './Select2Multi'

export default {
  props: {
    multiple: Boolean,
    value: [String, Number, Array],

    // From mixin
    disabled: Boolean,
    dropdownAutoWidth: Boolean,
    initSelection: Function,
    maximumInputLength: Number,
    minimumInputLength: Number,
    placeholder: String,
    query: Function,
    width: String,

    // From Single select
    allowClear: Boolean,
    minimumResultsForSearch: Number,

    // From multi select
    sortable: Boolean,
    tagsMode: Boolean,
  },

  render(h) {
    const componentType = this.multiple ? Select2Multi : Select2Single;
    return h(componentType, {
      attrs: this.$options.propsData,
      on: {
        input: value => this.$emit('input', value)
      },
      ref: 'select',
      scopedSlots: {
        formatSelection: this.$scopedSlots.formatSelection,
        formatResult: this.$scopedSlots.formatResult
      },
    }, [
      this.$slots.default
    ])
  },

  created() {
    this.$on('dataChanged', () => this.$refs.select.$emit('dataChanged'));
  }
}
