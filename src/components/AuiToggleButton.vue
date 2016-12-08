<template>
    <span>
        <aui-label v-if="label" :for="id">{{ label }}</aui-label>
        <aui-toggle ref="toggle" :id="id"
                    :tooltip-on="tooltipOn || 'Enabled'" :tooltip-off="tooltipOff || 'Disabled'"
                    :label="label || ''"
                    :checked="value"></aui-toggle>
    </span>
</template>

<script>
  export default {
    props: ['value', 'id', 'label', 'tooltipOn', 'tooltipOff'],

    mounted: function () {
      if (this.label && !this.id) {
            throw "You need to define aui-toggle-button id attribute to properly match label to the toggle"
      }
      this.$refs.toggle.addEventListener('change', this.emitChange);
    },

    methods: {
      emitChange() {
        this.$emit('input', this.$refs.toggle.checked)
      }
    }
  }
</script>
