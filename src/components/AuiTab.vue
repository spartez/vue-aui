<template>
  <div class="tabs-pane" :id="id">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: ['tabId'],

    data() {
      return {
        id: this.tabId
      }
    }
  }
</script>
