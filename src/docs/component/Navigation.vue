<template>
  <div>
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
