<template>
  <li class="aui-progress-tracker-step" :class="{'aui-progress-tracker-step-current': active}" style="width: 1%">
    <span>
      <slot></slot>
    </span>
  </li>
</template>

<script>
  export default {
    props: {
      active: Boolean
    }
  }
</script>
