<template>
  <div :class="classObject">
    <p v-if="title" class="title">
      <strong>{{title}}</strong>
    </p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      closeable: Boolean,
      title: String,
      type: {
        type: String,
        default: 'info',
        validator(value) {
          return 'error' === value
            || 'warning' === value
            || 'success' === value
            || 'info' === value
        }
      },
    },

    computed: {
      classObject() {
        return {
          'aui-message': true,
          [`aui-message-${this.type}`]: true,
          'closeable': this.closeable,
        }
      }
    },

    mounted() {
      AJS.messages.makeCloseable();
    }
  }
</script>
