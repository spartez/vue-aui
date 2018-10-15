<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example">
          <va-nav-vertical class="wrapped bordered short-width">
            <va-nav-group>
              <va-nav-item name="Selected Item" href="https://example.com" selected></va-nav-item>
              <va-nav-item name="Item 2" href="https://google.com"></va-nav-item>
            </va-nav-group>
            <va-nav-header name="Header"></va-nav-header>
            <va-nav-group>
              <va-nav-item name="Item 3" href="#"></va-nav-item>
              <va-nav-item name="Item 4"></va-nav-item>
              <va-nav-item icon="edit" name="Edit"></va-nav-item>
            </va-nav-group>
          </va-nav-vertical>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>

      <h3>Automatic tabs mode</h3>
      <va-tabs>
        <va-tab name="Example">
          <va-nav-vertical class="bordered" tabs-mode>
            <va-nav-group>
              <va-nav-item name="Selected Item" selected>Reactive counter: {{counter}}</va-nav-item>
            </va-nav-group>
            <va-nav-header name="Header"></va-nav-header>
            <va-nav-group>
              <va-nav-item name="Item 2">Content Two</va-nav-item>
              <va-nav-item name="Item 3">Content Three</va-nav-item>
            </va-nav-group>
          </va-nav-vertical>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </va-tab>
      </va-tabs>
    </div>


    <div class="aui-item">
      <api-table name="va-nav-vertical" :props="[
      {name: 'tabs-mode', type: 'Boolean', default: 'false', description: 'Enabled the nav mode which emulates tabs for each item.'},
    ]" :slots="[
      {name: 'default', description: 'Container for va-nav-header and va-nav-group elements.'},
    ]">
      </api-table>

      <api-table name="va-nav-group" :slots="[
      {name: 'default', description: 'Container for va-nav-item.'},
    ]">
      </api-table>

      <api-table name="va-nav-header" :props="[
      {name: 'name', type: 'String', description: 'Header name on the navigation list.'},
    ]">
      </api-table>
      <api-table name="va-nav-item" :props="[
      {name: 'name', type: 'String', description: 'Item name on the navigation list.'},
      {name: 'selected', type: 'Boolean', default: 'false', description: 'Renderes selected item.'},
      {name: 'href', type: 'String', description: 'Rendered link href.'},
      {name: 'icon', type: 'String', description: 'Add an icon left of the name.'},
    ]" :slots="[
      {name: 'default', description: 'Used in tabs-mode. Tab content.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
        code: `<va-nav-vertical>
  <va-nav-group>
    <va-nav-item name="Selected Item" href="https://example.com" selected></va-nav-item>
    <va-nav-item name="Item 2" href="https://google.com"></va-nav-item>
  </va-nav-group>
  <va-nav-header name="Header"></va-nav-header>
  <va-nav-group>
    <va-nav-item name="Item 3" href="#"></va-nav-item>
    <va-nav-item name="Item 4"></va-nav-item>
  </va-nav-group>
</va-nav-vertical>`,
        code2: `<va-nav-vertical tabs-mode>
  <va-nav-group>
    <va-nav-item name="Selected Item" selected>Reactive counter: {{counter}}</va-nav-item>
  </va-nav-group>
  </va-nav-group>
  <va-nav-header name="Header"></va-nav-header>
  <va-nav-group>
    <va-nav-item name="Item 2">Content Two</va-nav-item>
    <va-nav-item name="Item 3">Content Three</va-nav-item>
  </va-nav-group>
</va-nav-vertical>`
      }
    },

    mounted() {
      setInterval(() => this.counter++, 1000)
    }
  }
</script>

<style scoped>
  .short-width {
    width: 200px;
  }

  .bordered {
    border: #ccc solid 1px;
    border-radius: 3px;
  }

  .wrapped {
    padding: 20px;
  }
</style>
