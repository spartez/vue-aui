<template>
  <div :class="[classObject, transition]">
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
      transition: {
        type: String,
        validator(value) {
          const transitionArray = ['fade-in-bottom', 'fade-in-top', 'fade-in', 'fade-out-top', 'fade-out-bottom', 'fade-out'];
          return transitionArray.includes(value);
        },
      },
    },

    computed: {
      classObject() {
        return {
          'aui-message': true,
          [`aui-message-${this.type}`]: true,
          'closeable': this.closeable,
        };
      },
    },

    mounted() {
      AJS.messages.makeCloseable();
    },
  };
</script>

<style scoped>
.fade-in-bottom{-webkit-animation:fade-in-bottom .6s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in-bottom .6s cubic-bezier(.39,.575,.565,1.000) both}
@-webkit-keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-bottom{0%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
.fade-in-top{-webkit-animation:fade-in-top .6s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in-top .6s cubic-bezier(.39,.575,.565,1.000) both}
@-webkit-keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}
.fade-in{-webkit-animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1.000) both;animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1.000) both}
@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}
.fade-out{-webkit-animation:fade-out 1s ease-out both;animation:fade-out 1s ease-out both}
@-webkit-keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}
.fade-out-top{-webkit-animation:fade-out-top .7s cubic-bezier(.25,.46,.45,.94) both;animation:fade-out-top .7s cubic-bezier(.25,.46,.45,.94) both}
@-webkit-keyframes fade-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}}@keyframes fade-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-50px);transform:translateY(-50px);opacity:0}}
.fade-out-bottom{-webkit-animation:fade-out-bottom .7s cubic-bezier(.25,.46,.45,.94) both;animation:fade-out-bottom .7s cubic-bezier(.25,.46,.45,.94) both}
@-webkit-keyframes fade-out-bottom{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}}@keyframes fade-out-bottom{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(50px);transform:translateY(50px);opacity:0}}
</style>
