<template>
  <div>
    <h3>Toggle button</h3>
    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-toggle-button v-model="toggle1"></aui-toggle-button>
          <span>{{toggle1}}</span>
        </p>
        <p>
          <aui-toggle-button v-model="toggle2" id="example-toggle" label="Switch me" tooltip-on="On" tooltip-off="Off">
          </aui-toggle-button>
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
      </aui-tab>
    </aui-tabs>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        toggle1: true,
        toggle2: false,
        code: `<p>
  <aui-toggle-button v-model="toggle1"></aui-toggle-button>
  <span>{{toggle1}}</span>
</p>
<p>
  <aui-toggle-button
      v-model="toggle2"
      id="example-toggle"
      label="Switch me"
      tooltip-on="On"
      tooltip-off="Off"></aui-toggle-button>
</p>
`
      }
    }
  }
</script>
