<template lang="html">
  <table class="aui" :class="{'aui-table-list': list, 'aui-table-sortable': sortable}">
    <thead v-if="hasItems">
      <tr>
        <th v-for="(header, keyH) in headers" :key="keyH" :id="header.key"
          @click="sortField(header.key)" :class="setSortClass(header)">
          {{ header.name }}
        </th>
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
  data: () => ({
    sort: '',
    sortDirection: '+'
  }),
  props: {
    headers: Array,
    items: Array,
    list: Boolean,
    sortable: Boolean,
    sortableCallback: Function
  },
  computed: {
    hasItems() {
      const { items } = this

      return items && items.length
    }
  },
  methods: {
    setSortClass(header) {
      const unsortable = {
        'aui-table-column-unsortable': true
      }

      if (header.hasOwnProperty('sortable') && !header.sortable) {
        return unsortable
      }

      if (this.sortable) {
        return {
          'tablesorter-header': true,
          'tablesorter-headerAsc': this.sort.includes(header.key) && this.sortDirection === '+',
          'tablesorter-headerDesc': this.sort.includes(header.key) && this.sortDirection === '-',
          'tablesorter-headerUnsorted': !this.sort.includes(header.key)
        }
      }

      return unsortable
    },
    sortField(header) {
      if (!header.sortable) return

      this.sortDirection = this.sortDirection === '-' ? '+' : '-'
      this.sort = this.sortDirection + header.key

      if (this.sortableCallback) {
        this.sortableCallback()
      }

      return
    }
  }
}
</script>
