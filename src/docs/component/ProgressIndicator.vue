<template>
  <div>
    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-progress-indicator :percentage='30'></aui-progress-indicator>
        </p>
        <p>
          <aui-progress-indicator :indeterminate='true'></aui-progress-indicator>
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
        code: "<aui-progress-indicator :percentage='30'></aui-progress-indicator>\n<aui-progress-indicator :indeterminate='true'></aui-progress-indicator>",
      }
    }
  }
</script>
