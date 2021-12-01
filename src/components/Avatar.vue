<template>
  <span :class="['aui-avatar', 'aui-avatar-' + size, squared ? 'aui-avatar-squared' : '']">
    <span class="aui-avatar-inner"><img :src="src"></span>
  </span>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'medium'
      },
      squared: Boolean,
      src: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .aui-avatar-squared .aui-avatar-inner {
    border-radius: 3px;
  }
</style>
