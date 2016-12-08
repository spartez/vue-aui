<template>
    <span>
        <aui-label :for="id">{{ label }}</aui-label>
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
      this.$refs.toggle.addEventListener('change', this.emitChange);
    },

    methods: {
      emitChange() {
        this.$emit('input', this.$refs.toggle.checked)
      }
    }
  }
</script>
