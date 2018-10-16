<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Basic usage</h3>
      <va-tabs>
        <va-tab name="Example">
          <va-table :headers="headers" :items="items"></va-table>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text="code"></code></pre>
        </va-tab>
      </va-tabs>
      <h3>List prop</h3>
      <va-tabs>
        <va-tab name="Example">
          <va-table :headers="headers" :items="items" list></va-table>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text="code2"></code></pre>
        </va-tab>
      </va-tabs>
    </div>
    <div class="aui-item">
      <api-table name="va-table" :props="[
        {name: 'headers', type: 'Array', description: 'Array of strings for the table headers.'},
        {name: 'items', type: 'Array', description: 'Array of objects. Must be in the same order as the headers.'},
        {name: 'list', type: 'Boolean', default: 'false', description: 'If true it will set the aui-table-list class.'}
      ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
            '#',
            'First name',
            'Last name',
            'Username'
        ],
        items: [
          {
            uuid: '1',
            firstName: 'Matt',
            lastName: 'Bond',
            userName: 'mbond'
          },
          {
            uuid: '2',
            firstName: 'Ross',
            lastName: 'Chaldecott',
            userName: 'rchaldecott'
          },
          {
            uuid: '3',
            firstName: 'Henry',
            lastName: 'Tapia',
            userName: 'htapia'
          }
        ],
        code: `<va-table :headers="headers" :items="items"></va-table>`,
        code2: `<va-table :headers="headers" :items="items" list></va-table>`
      }
    }
  }
</script>
