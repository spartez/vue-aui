<template>
  <select2-single v-if="!multiple"
                     ref="select"
                     :allow-clear="allowClear"
                     :create-search-choice="createSearchChoice"
                     :dropdown-auto-width="dropdownAutoWidth"
                     :disabled="disabled"
                     :format-no-matches="formatNoMatches"
                     :init-selection="initSelection"
                     :maximum-input-length="maximumInputLength"
                     :minimum-input-length="minimumInputLength"
                     :minimum-results-for-search="minimumResultsForSearch"
                     :placeholder="placeholder"
                     :query="query"
                     :width="width"
                     :value="value"
                      :separator="separator"
                     @input="$emit('input', $event)"
  >
    <slot></slot>

    <template slot="formatResult" slot-scope="option">
      <slot v-if="$scopedSlots.formatResult"
            name="formatResult"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text ? option.text.toString() : ''}}</template>
    </template>

    <template slot="formatSelection" slot-scope="option">
      <slot v-if="$scopedSlots.formatSelection"
            name="formatSelection"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text ? option.text.toString() : ''}}</template>
    </template>

  </select2-single>

  <select2-multi v-else
                    ref="select"
                    :create-search-choice="createSearchChoice"
                    :disabled="disabled"
                    :dropdown-auto-width="dropdownAutoWidth"
                    :format-no-matches="formatNoMatches"
                    :format-selection-too-big="formatSelectionTooBig"
                    :init-selection="initSelection"
                    :locked="locked"
                    :maximum-input-length="maximumInputLength"
                    :maximum-selection-size="maximumSelectionSize"
                    :minimum-input-length="minimumInputLength"
                    :placeholder="placeholder"
                    :sortable="sortable"
                    :tags-mode="tagsMode"
                    :query="query"
                    :value="value"
                    :width="width"
                 :separator="separator"
                    @input="$emit('input', $event)"
  >
    <slot></slot>

    <template slot="formatResult" slot-scope="option">
      <slot v-if="$scopedSlots.formatResult"
            name="formatResult"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text ? option.text.toString() : ''}}</template>
    </template>

    <template slot="formatSelection" slot-scope="option">
      <slot v-if="$scopedSlots.formatSelection"
            name="formatSelection"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text ? option.text.toString() : ''}}</template>
    </template>

  </select2-multi>
</template>

<script>
  import Select2Single from './Select2Single'
  import Select2Multi from './Select2Multi'

  export default {
    props: {
      multiple: Boolean,
      value: [String, Number, Array],

      // From mixin
      createSearchChoice: Function,
      disabled: Boolean,
      dropdownAutoWidth: Boolean,
      formatNoMatches: Function,
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
      formatSelectionTooBig: Function,
      locked: Array,
      maximumSelectionSize: Number,
      sortable: Boolean,
      tagsMode: Boolean,
      separator: {
        type: String,
        default: ','
      }
    },

    components: {Select2Single, Select2Multi},

    created() {
      this.$on('dataChanged', () => this.$refs.select.$emit('dataChanged'));
    }
  }
</script>

<style>
/* Override AUI misplaced close icon */
.select2-container.select2-container-multi .select2-search-choice-close {
  top: 5px !important;
  right: 2px !important;
}

.select2-container .select2-search-choice-close {
  top: 10px !important;
}
</style>
