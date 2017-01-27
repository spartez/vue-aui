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
      placeholder: String,
      width: String,
      dropdownAutoWidth: Boolean,
      allowClear: Boolean,
      query: Function
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
      this.$refs.input.classList = this.$el.classList
      this.$el.classList = []

      this.$input = AJS.$(this.$refs.input)
      this.$input.val(this.value)
      this.$input.auiSelect2({
        allowClear: this.allowClear,
        query: this.query,
        data: () => ({results: this.options}),
        placeholder: this.placeholder,
        width: this.width,
        dropdownAutoWidth: this.dropdownAutoWidth
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
        if (this.$input) {
          this.$input.auiSelect2('val', this.value);
        }
      }
    }
  }
</script>

<style>
  .aui-select2-container.select2-container.select2-allowclear .select2-choice abbr {
    display: block;
  }
</style>
