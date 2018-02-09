<template>
  <span class="aui-spinner-container" :style="containerSize"></span>
</template>

<script>
  export default {
    props: {
      spin: {type: Boolean, default: true},
      radius: {type: Number, default: 3},
      width: {type: Number, default: 2},
      length: {type: Number, default: 3},
      color: String
    },

    computed: {
      spinnerOptions() {
        return {
          className: 'aui-spinner',
          position: 'absolute',
          color: this.color,
          radius: this.radius,
          width: this.width,
          length: this.length,
        }
      },

      containerSize() {
        const size = (this.radius + this.length + this.width) * 2;
        return {
          height: `${size}px`,
          width: `${size}px`,
        }
      }
    },

    mounted() {
      if (this.spin) {
        this.start();
      } else {
        this.stop()
      }
    },

    watch: {
      spin(newVal) {
        if (newVal) {
          this.start();
        } else {
          this.stop();
        }
      },

      spinnerOptions() {
        if (this.spin) {
          this.start();
        }
      }
    },

    methods: {
      start() {
        AJS.$(this.$el).spin(this.spinnerOptions);
      },

      stop() {
        AJS.$(this.$el).spinStop();
      }
    }
  }
</script>

<style>
  .aui-spinner-container {
    position: relative;
    display: inline-block;
    vertical-align: middle;
  }

  .aui-spinner-container .aui-spinner {
    top: 50% !important;
    left: 50% !important;
  }
</style>
