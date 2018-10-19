<template>
    <span>
        <aui-label v-if="label" :for="id">{{ label }}</aui-label>
        <aui-toggle ref="toggle" :id="id"
                    @mouseover="opacity = true"
                    @mouseout="opacity = false"
                    :style="{'opacity': opacity ? .7 : 1}"
                    style="transition: 100ms all linear"
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
      tooltipOff: String,
      vaColor: String
    },
    data: () => ({
      opacity: false
    }),

    mounted: function () {
      if (this.label && !this.id) {
        throw "You need to define aui-toggle-button id attribute to properly match label to the toggle"
      }
      this.$refs.toggle.addEventListener('change', this.emitChange);
      this.$nextTick(() => this.$refs.toggle.busy = this.busy);

      if (this.vaColor) {
        this.changeColor();
      }
    },

    methods: {
      changeColor() {
        const toggleOn = this.$el.querySelector('.aui-toggle-input:enabled + .aui-toggle-view');

        if (toggleOn && this.$refs.toggle.checked) {
          toggleOn.style.backgroundColor = this.VaColor;

          return;
        }

        toggleOn.style.backgroundColor = '';
      },
      emitChange() {
        this.$emit('input', this.$refs.toggle.checked)
        this.changeColor();
      }
    },

    watch: {
      busy(value) {
        this.$refs.toggle.busy = value;
      }
    }
  }
</script>
