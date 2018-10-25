<template lang="html">
  <table class="aui" :class="list ? 'aui-table-list' : ''">
    <thead v-if="hasItems">
      <tr>
        <th v-for="(header, keyH) in headers" :key="keyH" :id="header.key">{{ header.name }}</th>
      </tr>
    </thead>
    <tbody v-if="hasItems">
      <tr v-for="(item, keyV) in items" :key="keyV">
        <td v-for="(header, keyI) in headers" :key="keyI" :headers="header.key">{{ item[header.key] }}</td>
      </tr>
    </tbody>
    <slot v-else></slot>
    <slot name="footer"></slot>
  </table>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
    list: Boolean
  },
  computed: {
    hasItems() {
      const { items } = this
      return items && items.length
    }
  }
}
</script>
