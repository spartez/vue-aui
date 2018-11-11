<template>
  <div class="tabs-pane" :id="id">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
         type: String,
         required: true
       },
       name: {
         type: String,
         required: true
       }
    }
  }
</script>
