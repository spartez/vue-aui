<template>
  <div class="tabs-pane" :id="id">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['id']
  }
</script>
