<template>
  <li :class="{'aui-nav-selected': this.selected}">
    <a :href="href">{{name}}</a>
  </li>
</template>

<script>
  export default {
    props: {
      name: String,
      href: String,
      selected: Boolean
    }
  }
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
