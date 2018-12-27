<template>
  <div class="tabs-pane" :id="id"><slot></slot></div>
</template>

<script>
import { createUniqueId } from "../../utils";

export default {
  props: {
    id: {
      type: String,
      default: () => createUniqueId(`tab`)
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>
