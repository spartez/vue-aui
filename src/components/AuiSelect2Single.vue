<template>
    <span>
        <input type="hidden" ref="input">
        <slot></slot>
    </span>
</template>

<script>
  export default{
    props: {
      value: String,
      placeholder: String
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

    mounted: function () {
      this.$input = AJS.$(this.$refs.input)
      this.$input.val(this.value)

      this.$input.auiSelect2({
        data: () => ({results: this.options}),
        placeholder: this.placeholder
      });

      this.$input.on('change', this.onSelect2ValueChanged)
    },

    watch: {
      value: function (value) {
        this.$input.auiSelect2('val', value)
      }
    },

    methods: {
      onSelect2ValueChanged: function (event) {
        this.$emit('input', event.val)
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
