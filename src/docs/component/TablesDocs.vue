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
      <h3>Sortable prop</h3>
      <va-tabs>
        <va-tab name="Example">
          <va-table :headers="headers" :items="items" sortable></va-table>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text="code3"></code></pre>
        </va-tab>
      </va-tabs>
      <h3>Using markups</h3>
      <va-tabs>
        <va-tab name="Example">
          <va-table>
            <thead>
              <tr>
                <th v-for="(header, keyH) in headers" :key="keyH" :id="header.key">{{ header.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, keyV) in items" :key="keyV">
                <td v-for="(header, keyI) in headers" :key="keyI" :headers="header.key">{{ item[header.key] }}</td>
              </tr>
            </tbody>
            <tfoot slot="footer">
              <tr>
                <td v-for="(footer, keyF) in (headers.length - 2)" :key="keyF"></td>
                <td><strong>Total</strong></td>
                <td><strong>{{ items.length }}</strong></td>
              </tr>
            </tfoot>
          </va-table>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text="code4"></code></pre>
        </va-tab>
      </va-tabs>
    </div>
    <div class="aui-item">
      <api-table name="va-table" :props="[
        {name: 'headers', type: 'Array', description: 'Array of objects for the table\'\s header. Each object must contain a name and a key property, both strings. This key property will bind the column to the respective header, so be sure to pass the same name. If sortable is true, but you don\'t want to sort a especific header, you can pass the sortable false attribute.'},
        {name: 'items', type: 'Array', description: 'Array of objects for the table\'\s body.'},
        {name: 'list', type: 'Boolean', default: 'false', description: 'If true it will set the aui-table-list class.'},
        {name: 'sortable', type: 'Boolean', default: 'false', description: 'If true the table headers can be clicked and the data is sorted.'},
        {name: 'sortableCallback', type: 'Function', default: '', description: 'Can be used when sortable is true. Pass a function here to be called when you sort a column. Useful for reloading the table asynchronously.'}
      ]"
      :slots="[
        {name: 'default', description: 'Optional. In case you want to create the markups yourself. It\'\s necessary when you don\'\t pass the items and headers prop.'},
        {name: 'footer', description: 'Optional. Footer of the table.'}
      ]"
      >
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
            {
              name: '#',
              key: 'uuid'
            },
            {
              name: 'First name',
              key: 'firstName'
            },
            {
              name: 'Username',
              key: 'userName'
            },
            {
              name: 'Last name',
              key: 'lastName',
              sortable: false
            }
        ],
        items: [
          {
            lastName: 'Bond',
            firstName: 'Matt',
            userName: 'mbond',
            uuid: '1'
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
        code2: `<va-table :headers="headers" :items="items" list></va-table>`,
        code3: `<va-table :headers="headers" :items="items" sortable></va-table>`,
        code4: `<va-table>
  <thead>
    <tr>
      <th v-for="(header, keyH) in headers" :key="keyH" :id="header.key">{{ header.name }}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, keyV) in items" :key="keyV">
      <td v-for="(header, keyI) in headers" :key="keyI" :headers="header.key">{{ item[header.key] }}</td>
    </tr>
  </tbody>
  <tfoot slot="footer">
    <tr>
      <td v-for="(footer, keyF) in (headers.length - 2)" :key="keyF"></td>
      <td><strong>Total</strong></td>
      <td><strong>{{ items.length }}</strong></td>
    </tr>
  </tfoot>
</va-table>`
      }
    }
  }
</script>
