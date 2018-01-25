<template>
  <div class="aui-group">
    <div class="aui-item">
      <aui-tabs>
        <aui-tab name="Example">
          <aui-nav-vertical class="wrapped bordered short-width">
            <aui-nav-group>
              <aui-nav-item name="Selected Item" href="https://example.com" selected></aui-nav-item>
              <aui-nav-item name="Item 2" href="https://google.com"></aui-nav-item>
            </aui-nav-group>
            <aui-nav-header name="Header"></aui-nav-header>
            <aui-nav-group>
              <aui-nav-item name="Item 3" href="#"></aui-nav-item>
              <aui-nav-item name="Item 4"></aui-nav-item>
            </aui-nav-group>
          </aui-nav-vertical>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </aui-tab>
      </aui-tabs>

      <h3>Automatic tabs mode</h3>
      <aui-tabs>
        <aui-tab name="Example">
          <aui-nav-vertical class="bordered" tabs-mode>
            <aui-nav-group>
              <aui-nav-item name="Selected Item" selected>Reactive counter: {{counter}}</aui-nav-item>
            </aui-nav-group>
            <aui-nav-header name="Header"></aui-nav-header>
            <aui-nav-group>
              <aui-nav-item name="Item 2">Content Two</aui-nav-item>
              <aui-nav-item name="Item 3">Content Three</aui-nav-item>
            </aui-nav-group>
          </aui-nav-vertical>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>


    <div class="aui-item">
      <api-table name="aui-nav-vertical" :props="[
      {name: 'tabs-mode', type: 'Boolean', default: 'false', description: 'Enabled the nav mode which emulates tabs for each item.'},
    ]" :slots="[
      {name: 'default', description: 'Container for aui-nav-header and aui-nav-group elements.'},
    ]">
      </api-table>

      <api-table name="aui-nav-group" :slots="[
      {name: 'default', description: 'Container for aui-nav-item.'},
    ]">
      </api-table>

      <api-table name="aui-nav-header" :props="[
      {name: 'name', type: 'String', description: 'Header name on the navigation list.'},
    ]">
      </api-table>
      <api-table name="aui-nav-item" :props="[
      {name: 'name', type: 'String', description: 'Item name on the navigation list.'},
      {name: 'selected', type: 'Boolean', default: 'false', description: 'Renderes selected item.'},
      {name: 'href', type: 'String', description: 'Rendered link href.'},
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
        code: `<aui-nav-vertical>
  <aui-nav-group>
    <aui-nav-item name="Selected Item" href="https://example.com" selected></aui-nav-item>
    <aui-nav-item name="Item 2" href="https://google.com"></aui-nav-item>
  </aui-nav-group>
  <aui-nav-header name="Header"></aui-nav-header>
  <aui-nav-group>
    <aui-nav-item name="Item 3" href="#"></aui-nav-item>
    <aui-nav-item name="Item 4"></aui-nav-item>
  </aui-nav-group>
</aui-nav-vertical>`,
        code2: `<aui-nav-vertical tabs-mode>
  <aui-nav-group>
    <aui-nav-item name="Selected Item" selected>Reactive counter: {{counter}}</aui-nav-item>
  </aui-nav-group>
  </aui-nav-group>
  <aui-nav-header name="Header"></aui-nav-header>
  <aui-nav-group>
    <aui-nav-item name="Item 2">Content Two</aui-nav-item>
    <aui-nav-item name="Item 3">Content Three</aui-nav-item>
  </aui-nav-group>
</aui-nav-vertical>`
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
