<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Button types</h3>
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-avatar size="xsmall"
                        src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar size="small" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar size="large" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar size="xlarge"
                        src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar size="xxlarge"
                        src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
          </p>

          <p>
            <va-avatar squared size="xsmall"
                        src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar squared size="small" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar squared src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar squared size="large" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar squared size="xlarge"
                        src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
            <va-avatar squared size="xxlarge"
                        src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-avatar" :props="[
      {name: 'size', type: 'String', default: 'medium', description: 'Sets proper size aligned with AUI guidelines.'},
      {name: 'squared', type: 'Boolean', default: 'false', description: 'Renders avatar in rounded square instead of a circle.'},
      {name: 'src', type: 'String', default: '-', description: 'URL of an avatar image.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<va-avatar size="xsmall" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar size="small" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar size="large" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar size="xlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar size="xxlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>

<va-avatar squared size="xsmall" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar squared size="small" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar squared src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar squared size="large" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar squared size="xlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>
<va-avatar squared size="xxlarge" src="https://docs.atlassian.com/aui/latest/docs/images/avatar-96.png"></va-avatar>`,
      }
    }
  }
</script>
