<template>
  <va-select2-single v-if="!multiple"
                     ref="select"
                     :allow-clear="allowClear"
                     :dropdown-auto-width="dropdownAutoWidth"
                     :disabled="disabled"
                     :init-selection="initSelection"
                     :maximum-input-length="maximumInputLength"
                     :minimum-input-length="minimumInputLength"
                     :minimum-results-for-search="minimumResultsForSearch"
                     :placeholder="placeholder"
                     :query="query"
                     :width="width"
                     :value="value"
                     @input="$emit('input', $event)"
  >
    <slot></slot>

    <template slot="formatResult" slot-scope="option">
      <slot v-if="$scopedSlots.formatResult"
            name="formatResult"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text}}</template>
    </template>

    <template slot="formatSelection" slot-scope="option">
      <slot v-if="$scopedSlots.formatSelection"
            name="formatSelection"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text}}</template>
    </template>

  </va-select2-single>

  <va-select2-multi v-else
                    ref="select"
                    :disabled="disabled"
                    :dropdown-auto-width="dropdownAutoWidth"
                    :init-selection="initSelection"
                    :locked="locked"
                    :maximum-input-length="maximumInputLength"
                    :minimum-input-length="minimumInputLength"
                    :placeholder="placeholder"
                    :sortable="sortable"
                    :tags-mode="tagsMode"
                    :query="query"
                    :value="value"
                    :width="width"
                    @input="$emit('input', $event)"
  >
    <slot></slot>

    <template slot="formatResult" slot-scope="option">
      <slot v-if="$scopedSlots.formatResult"
            name="formatResult"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text}}</template>
    </template>

    <template slot="formatSelection" slot-scope="option">
      <slot v-if="$scopedSlots.formatSelection"
            name="formatSelection"
            :data="option.data" :value="option.value" :text="option.text"/>
      <template v-else>{{option.text}}</template>
    </template>

  </va-select2-multi>
</template>

<script>
  export default {
    props: {
      multiple: Boolean,
      value: [String, Number, Array],

      // From mixin
      disabled: Boolean,
      dropdownAutoWidth: Boolean,
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
      locked: Array,
      sortable: Boolean,
      tagsMode: Boolean,
    },

    created() {
      this.$on('dataChanged', () => this.$refs.select.$emit('dataChanged'));
    }
  }
</script>
