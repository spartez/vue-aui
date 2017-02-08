<template>
  <div>
    <h2>Toggle button</h2>

    <h3>Examples</h3>
    <p>
      <aui-toggle-button v-model="toggle1"></aui-toggle-button>
      <span>{{toggle1}}</span>
    </p>
    <p>
      <aui-toggle-button v-model="toggle2" id="example-toggle" label="Switch me" tooltip-on="On"
                         tooltip-off="Off"></aui-toggle-button>
    </p>

    <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
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
