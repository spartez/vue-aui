<template>
    <span>
        <input :disabled="disabled" type="hidden" ref="input">
        <slot></slot>
    </span>
</template>

<script>
  import auiSelect2Mixin from './auiSelect2Mixin'

  export default {
    mixins: [auiSelect2Mixin],

    props: {
      allowClear: Boolean,
      disabled: Boolean,
      dropdownAutoWidth: Boolean,
      initSelection: Function,
      maximumInputLength: Number,
      minimumInputLength: Number,
      minimumResultsForSearch: Number,
      placeholder: String,
      query: Function,
      value: String,
      width: String
    },

    mounted() {
      this.$input.val(this.value)
      this.$input.auiSelect2({
        allowClear: this.allowClear,
        data: () => ({results: this.options}),
        dropdownAutoWidth: this.dropdownAutoWidth,
        formatResult: option => this.renderTemplate(option, this.$scopedSlots.formatResult),
        formatSelection: option => this.renderTemplate(option, this.$scopedSlots.formatSelection),
        initSelection: this.initSelection,
        maximumInputLength: this.maximumInputLength,
        minimumInputLength: this.minimumInputLength,
        minimumResultsForSearch: this.minimumResultsForSearch,
        placeholder: this.placeholder,
        query: this.query,
        width: this.width
      });
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
      onSelect2ValueChanged(event) {
        this.$emit('input', event.val)
      },
    }
  }
</script>

<style>
  .aui-select2-container.select2-container.select2-allowclear .select2-choice abbr {
    display: block;
  }
</style>
