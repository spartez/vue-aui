<template>
    <span class="vue-aui-multi-select2">
        <input :disabled="disabled" type="hidden" ref="input">
        <slot></slot>
    </span>
</template>

<script type="es6">
  const SEPARATOR = ',';

  export default {
    props: {
      disabled: Boolean,
      initSelection: Function,
      placeholder: String,
      query: Function,
      sortable: Boolean,
      tagsMode: Boolean,
      value: Array,
      width: String
    },

    data() {
      return {
        options: []
      }
    },

    created () {
      this.updateOptions()
      this.$on('optionsChanged', this.updateOptions)
      this.$on('dataChanged', () => {
        this.$input.auiSelect2("val", this.value)
      })
    },

    mounted () {
      this.$refs.input.className = this.$el.className
      this.$el.className = ''

      this.$input = AJS.$(this.$refs.input)
      this.setSelectValue(this.value)

      const options = {
        query: this.query,
        initSelection: this.initSelection,
        placeholder: this.placeholder,
        width: this.width
      }

      if (this.tagsMode) {
        options.formatNoMatches = () => "Type to add a value"
        options.tags = () => this.options
      } else {
        options.multiple = true
        options.data = () => ({results: this.options})
      }

      this.$input.auiSelect2(options)

      if (this.sortable) {
        this.$input.prev('div').find('.select2-choices').sortable({
          containment: 'parent',
          start: () => this.$input.auiSelect2("onSortStart"),
          update: () => this.$input.auiSelect2("onSortEnd")
        });
      }

      this.$input.on('change', this.onSelect2ValueChanged)
    },

    watch: {
      value: function (value) {
        this.$input.auiSelect2("val", value)
      },
      disabled() {
        this.$input.auiSelect2('val', this.value)
      }
    },

    methods: {
      onSelect2ValueChanged(event) {
        this.$emit('input', event.val)
      },

      setSelectValue(values) {
        this.$input.val(values && values.join(SEPARATOR))
      },

      updateOptions() {
        this.options = this.$children.map(child => {
          const id = child.value
          const text = child.$slots.default[0].text
          return {id, text}
        })
      }
    }
  }
</script>

<style>
  /* Override AUI too high locked items*/
  .vue-aui-multi-select2 .select2-search-choice.select2-locked {
    padding: 1px 5px !important;
  }
</style>
