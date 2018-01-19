<template>
  <div class="aui-group">
    <div class="aui-item">
      <aui-tabs>
        <aui-tab name="Example">
          <p>
            <aui-badge>1</aui-badge>
            <aui-badge class="aui-badge-primary">2</aui-badge>
            <aui-badge>3</aui-badge>
            <aui-badge class="aui-badge-primary">4</aui-badge>
            <aui-badge>5</aui-badge>
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>

    <div class="aui-item">
      <api-table name="aui-badge">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-badge>1</aui-badge>
<aui-badge class="aui-badge-primary">2</aui-badge>
<aui-badge>3</aui-badge>
<aui-badge class="aui-badge-primary">4</aui-badge>
<aui-badge>5</aui-badge>`,
      }
    }
  }
</script>
