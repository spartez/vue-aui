<template>
  <div class="aui-progress-indicator" ref='progressIndicator'>
    <span class="aui-progress-indicator-value"></span>
  </div>
</template>

<script>
  export default {
    props: {
      percentage: {
        type: Number,
        default: 0,
        validator(value) {
          return value >= 0 && value <= 100
        }
      },

      indeterminate: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      percentage() {
        if (!this.indeterminate) {
          this.setProgerssIndicator()
        }
      }
    },

    mounted() {
      if (this.indeterminate) {
        AJS.progressBars.setIndeterminate(this.$refs.progressIndicator)
      } else {
        this.setProgerssIndicator()
      }
    },

    methods: {
      setProgerssIndicator() {
        AJS.progressBars.update(this.$refs.progressIndicator, this.percentage / 100)
      }
    }
  }
</script>
