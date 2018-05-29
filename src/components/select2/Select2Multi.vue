<template>
    <span class="vue-aui-multi-select2">
        <input :disabled="disabled" type="hidden" ref="input">
        <slot></slot>
    </span>
</template>

<script>
  import auiSelect2Mixin from './select2Mixin'

  const SEPARATOR = ',';

  export default {
    mixins: [auiSelect2Mixin],

    props: {
      formatSelectionTooBig: Function,
      maximumSelectionSize: Number,
      sortable: Boolean,
      tagsMode: Boolean,
      value: Array,
      locked: {type: Array, default: () => []}
    },

    watch: {
      locked() {
        this.updateValue()
      },
    },

    created() {
      this.$on('dataChanged', this.updateValue)
    },

    mounted() {
      this.$input.val(this.value && this.value.join(SEPARATOR))

      const options = {...this.commonOptions}

      if (this.initSelection) {
        options.initSelection = (element, callback) => {
          const callbackWrapper = options => {
            if (!options) {
              callback(options)
            } else {
              callback(options.map(option => ({
                ...option,
                locked: option.locked || this.locked.indexOf(option.id) >= 0
              })))
            }
          }

          this.initSelection(element, callbackWrapper)
        }
      }

      if (this.tagsMode) {
        options.formatNoMatches = () => "Type to add a value"
        options.tags = () => this.options
      } else {
        options.multiple = true
        options.data = () => ({results: this.options})
      }

      options.formatSelectionTooBig = this.formatSelectionTooBig
      options.maximumSelectionSize = this.maximumSelectionSize

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
</style>
