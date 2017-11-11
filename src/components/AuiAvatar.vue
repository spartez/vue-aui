<template>
  <span :class="['aui-avatar', 'aui-avatar-' + size]">
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
      src: {
        type: String,
        required: true,
      }
    }
  }
</script>
