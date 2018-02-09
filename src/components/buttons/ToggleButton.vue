<template>
    <span>
        <aui-label v-if="label" :for="id">{{ label }}</aui-label>
        <aui-toggle ref="toggle" :id="id"
                    :tooltip-on="tooltipOn || 'Enabled'" :tooltip-off="tooltipOff || 'Disabled'"
                    :disabled="disabled"
                    :label="label || ''"
                    :checked="value"></aui-toggle>
    </span>
</template>

<script>
  import {createUniqueId} from '../../utils'

  export default {
    props: {
      busy: Boolean,
      disabled: Boolean,
      value: Boolean,
      id: {
        type: String,
        default: () => createUniqueId('toggle_button')
      },
      label: String,
      tooltipOn: String,
      tooltipOff: String
    },

    mounted: function () {
      if (this.label && !this.id) {
        throw "You need to define aui-toggle-button id attribute to properly match label to the toggle"
      }
      this.$refs.toggle.addEventListener('change', this.emitChange);
      this.$nextTick(() => this.$refs.toggle.busy = this.busy);
    },

    methods: {
      emitChange() {
        this.$emit('input', this.$refs.toggle.checked)
      }
    },

    watch: {
      busy(value) {
        this.$refs.toggle.busy = value;
      }
    }
  }
</script>
