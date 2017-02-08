`
<template>
  <div>
    <h2>Tabs</h2>

    <aui-tabs>
      <aui-tab name="Tab 1" id="tab1">
        <h3>Tab 1</h3>
        <p>This is content of tab 1</p>
      </aui-tab>
      <aui-tab name="Tab 2" id="tab2">
        <h3>Tab 2</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </aui-tab>
    </aui-tabs>

    <pre v-highlightjs><code class="xml" v-text='code'></code></pre>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-tabs>
  <aui-tab name="Tab 1" id="tab1">
    <h3>Tab 1</h3>
    <p>This is content of tab 1</p>
  </aui-tab>
  <aui-tab name="Tab 2" id="tab2">
    <h3>Tab 2</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
    </p>
  </aui-tab>
</aui-tabs>
`
      }
    }
  }
</script>
