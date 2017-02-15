<template>
    <span>
        <input type="hidden" ref="input">
        <slot></slot>
    </span>
</template>

<script type="es6">
  const SEPARATOR = ',';

  export default {
    props: {
      value: Array,
      tagsMode: Boolean,
      sortable: Boolean
    },

    data() {
      return {
        options: []
      }
    },

    created () {
      this.updateOptions()
      this.$on('optionsChanged', this.updateOptions)
    },

    mounted () {
      this.$refs.input.classList = this.$el.classList
      this.$el.classList = []

      this.$input = AJS.$(this.$refs.input)
      this.setSelectValue(this.value)

      const options = {}

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
