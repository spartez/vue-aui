<template lang="html">
  <table class="aui" :class="list ? 'aui-table-list' : ''">
    <thead>
      <tr>
        <th v-for="(header, keyH) in headers" :key="keyH" :id="keyH">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, keyV) in items" :key="keyV">
        <td v-for="(value, keyI) in Object.values(item)" :key="keyI" :headers="keyI">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    list: Boolean
  }
}
</script>
