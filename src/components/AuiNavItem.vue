<template>
  <li :class="classes">
    <a :href="href">{{name}}</a>
  </li>
</template>

<script>
  export default {
    props: {
      name: String,
      href: String,
      selected: Boolean
    },

    data() {
      return {
        classes: {'aui-nav-selected': this.selected}
      }
    }
  }
</script>
