<template>
  <li :class="{'aui-nav-selected': this.selected}">
    <a :href="href">
      <va-icon class="nav-item-icon" v-if="icon">{{ icon }}</va-icon>
      {{name}}
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      name: String,
      href: String,
      selected: Boolean,
      icon: String
    }
  }
</script>

<style scoped>
  a {
    cursor: pointer;
  }

  .nav-item-icon {
    padding-right: .5em;
  }
</style>
