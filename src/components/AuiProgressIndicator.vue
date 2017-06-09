<template>
  <div class="aui-progress-indicator" ref='progressIndicator'>
    <span class="aui-progress-indicator-value"></span>
  </div>
</template>

<script>
  export default {
    props: {
      indeterminate: {
        type: Boolean,
        default: false
      },

      progress: {
        type: Number,
        default: 0,
        validator(value) {
          return value >= 0 && value <= 1
        }
      }
    },

    watch: {
      progress() {
        this.setProgerssIndicator()
      },

      indeterminate() {
        this.setProgerssIndicator();
      }
    },

    mounted() {
      this.setProgerssIndicator()
    },

    methods: {
      setProgerssIndicator() {
        if (this.indeterminate) {
          AJS.progressBars.setIndeterminate(this.$refs.progressIndicator)
        } else {
          AJS.progressBars.update(this.$refs.progressIndicator, this.progress)
        }
      }
    }
  }
</script>
