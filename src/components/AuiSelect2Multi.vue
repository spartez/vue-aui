<template>
    <span>
        <input type="hidden" ref="input">
        <slot></slot>
    </span>
</template>

<script>
  const SEPARATOR = ',';

  export default{
    props: {
      value: Array,
      tagsMode: Boolean
    },

    data: function () {
      return {
        options: []
      }
    },

    created: function () {
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
