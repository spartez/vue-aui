<template>
    <span>
        <aui-label v-if="label" :for="id">{{ label }}</aui-label>
        <aui-toggle ref="toggle" :id="id"
                    :tooltip-on="tooltipOn || 'Enabled'" :tooltip-off="tooltipOff || 'Disabled'"
                    :disabled="disabled"
                    :label="label || ''"
                    :class="vaType"
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
      tooltipOff: String,
      vaType: {
        type: String,
        default: 'success',
        validator(value) {
          return 'error' === value
            || 'warning' === value
            || 'success' === value
            || 'info' === value
        }
      }
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

<style>
.aui-toggle-input + .aui-toggle-view {
  transition: 100ms all linear;
}

.error:not([disabled]) .aui-toggle-input:checked:enabled + .aui-toggle-view,
.error:not([disabled]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view,
.error.aui-toggle-input.indeterminate-checked + .aui-toggle-view {
  background-color: #DE350B;
}

.success:not([disabled]) .aui-toggle-input:checked:enabled + .aui-toggle-view,
.success:not([disabled]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view,
.success.aui-toggle-input.indeterminate-checked + .aui-toggle-view {
  background-color: #00875A;
}

.warning:not([disabled]) .aui-toggle-input:checked:enabled + .aui-toggle-view,
.warning:not([disabled]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view,
.warning.aui-toggle-input.indeterminate-checked + .aui-toggle-view {
  background-color: #FFAB00;
}

.info:not([disabled]) .aui-toggle-input:checked:enabled + .aui-toggle-view,
.info:not([disabled]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view,
.info .aui-toggle-input.indeterminate-checked + .aui-toggle-view {
  background-color: #0052CC;
}

.error:not([disabled]):not([busy]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view,
.warning:not([disabled]):not([busy]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view,
.success:not([disabled]):not([busy]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view,
.info:not([disabled]):not([busy]):hover .aui-toggle-input:checked:enabled + .aui-toggle-view {
  opacity: .7;
}
</style>
