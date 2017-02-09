<template>
  <div>
    <h2>Navigation</h2>

    <aui-tabs>
      <aui-tab name="Example" id="tabs-example">
        <h3>Vertical</h3>

        <aui-nav-vertical class="wrapped">
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

      <aui-tab name="Code" id="tabs-code">
        <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
      </aui-tab>
    </aui-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-nav-vertical class="wrapped">
  <aui-nav-group>
    <aui-nav-item name="Selected Item" href="https://example.com" selected></aui-nav-item>
    <aui-nav-item name="Item 2" href="https://google.com"></aui-nav-item>
  </aui-nav-group>
  <aui-nav-header name="Header"></aui-nav-header>
  <aui-nav-group>
    <aui-nav-item name="Item 3" href="#"></aui-nav-item>
    <aui-nav-item name="Item 4"></aui-nav-item>
  </aui-nav-group>
</aui-nav-vertical>`
      }
    }
  }
</script>

<style scoped>
  .wrapped {
    border: #ccc solid 1px;
    margin-top: 10px;
    padding: 20px;
    width: 200px;
    border-radius: 3px;
  }
</style>
