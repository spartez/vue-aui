<template>
  <div class="tabs-pane" :id="id">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      tabId: String
    },

    data() {
      return {
        id: this.tabId
      }
    }
  }
</script>
