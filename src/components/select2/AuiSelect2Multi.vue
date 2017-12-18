<template>
    <span class="vue-aui-multi-select2">
        <input :disabled="disabled" type="hidden" ref="input">
        <slot></slot>
    </span>
</template>

<script>
  import auiSelect2Mixin from './auiSelect2Mixin'

  const SEPARATOR = ',';

  export default {
    mixins: [auiSelect2Mixin],

    props: {
      sortable: Boolean,
      tagsMode: Boolean,
      value: Array
    },

    created() {
      this.$on('dataChanged', this.updateValue)
    },

    mounted() {
      this.$input.val(this.value && this.value.join(SEPARATOR))

      const options = {...this.commonOptions}
      if (this.tagsMode) {
        options.formatNoMatches = () => "Type to add a value"
        options.tags = () => this.options
      } else {
        options.multiple = true
        options.data = () => ({results: this.options})
      }

      this.$input.auiSelect2(options)

      if (this.sortable) {
        this.setupSorting();
      }
    },

    methods: {
      setupSorting() {
        this.$input.prev('div').find('.select2-choices').sortable({
          containment: 'parent',
          start: () => this.$input.auiSelect2("onSortStart"),
          update: () => this.$input.auiSelect2("onSortEnd")
        });
      }
    }
  }
</script>

<style>
  /* Override AUI too high locked items*/
  .vue-aui-multi-select2 .select2-search-choice.select2-locked {
    padding: 1px 5px !important;
  }

  [data-aui-version^="7"] .vue-aui-multi-select2.aui-select2-container .select2-search-choice-close {
    width: 12px;
    height: 12px;
    top: 2px;
    right: 2px;
  }
</style>
