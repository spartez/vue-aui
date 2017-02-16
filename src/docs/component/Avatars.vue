<template>
  <div>
    <h3>Button types</h3>
    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-avatar size="xsmall" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
          <aui-avatar size="small" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
          <aui-avatar src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
          <aui-avatar size="large" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
          <aui-avatar size="xlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
          <aui-avatar size="xxlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
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
        code: `<aui-avatar size="xsmall" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
<aui-avatar size="small" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
<aui-avatar src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
<aui-avatar size="large" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
<aui-avatar size="xlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>
<aui-avatar size="xxlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></aui-avatar>`,
      }
    }
  }
</script>
