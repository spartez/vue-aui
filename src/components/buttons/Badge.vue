<template>
  <aui-badge :class="{ 'aui-badge-primary': primary }">
    <slot></slot>
  </aui-badge>
</template>

<script>
  export default {
    props: {
      primary: Boolean
    }
  }
</script>
