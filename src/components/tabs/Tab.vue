<template>
  <div class="tabs-pane" :id="hash">
    <slot></slot>
  </div>
</template>

<script>
  import {createUniqueId} from '../../utils'

  export default {
    props: {
      id: {
        type: String
      },
      name: {
        type: String,
        required: true
      }
    },
    computed: {
      hash() {
        return this.id ? this.id : createUniqueId(`tab`)
      }
    }
  }
</script>
