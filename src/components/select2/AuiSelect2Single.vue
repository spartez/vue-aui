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
      minimumResultsForSearch: Number,
      value: [String, Number],
    },

    mounted() {
      this.$input.val(this.value)

      const options = {
        ...this.commonOptions,
        allowClear: this.allowClear,
        data: () => ({results: this.options}),
        minimumResultsForSearch: this.minimumResultsForSearch,
      };

      this.$input.auiSelect2(options);
    }
  }
</script>

<style>
  .aui-select2-container.select2-container.select2-allowclear .select2-choice abbr {
    display: block;
  }

  [data-aui-version^="7"] .aui-select2-container.select2-container.select2-allowclear .select2-choice abbr {
    padding-top: 0;
    top: 8px;
  }
</style>
