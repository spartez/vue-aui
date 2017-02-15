<template>
  <span :class="classObject"><slot></slot></span>
</template>

<script>
  export default {
    props: {
      subtle: Boolean,
      type: {
        type: String,
        validator(value) {
          const types = ['success', 'error', 'current', 'complete', 'moved']
          return types.indexOf(value) >= 0
        }
      }
    },

    computed: {
      classObject() {
        return {
          'aui-lozenge': true,
          'aui-lozenge-subtle': this.subtle,
          'aui-lozenge-success': this.type === 'success',
          'aui-lozenge-error': this.type === 'error',
          'aui-lozenge-current': this.type === 'current',
          'aui-lozenge-complete': this.type === 'complete',
          'aui-lozenge-moved': this.type === 'moved',
        }
      }
    },
  }
</script>
