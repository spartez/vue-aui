<template>
  <div class="aui-group">

    <div class="aui-item">
      <va-message>
        AUI 7.7 introduced progress bar web component {{`&lt;aui-progressbar&gt;`}} which functionally replaces {{`&lt;va-progress-indicator&gt;`}}.
        You can still use {{`&lt;va-progress-indicator&gt;`}} on AUI older than 7.7. See
        <a href="https://docs.atlassian.com/aui/latest/docs/progress-indicator.html" target="_blank">
          aui-progress web component documentation</a>.
      </va-message>
      <va-tabs>
        <va-tab name="Deprecated code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-progress-indicator" is-deprecated :props="[
      {name: 'progress', type: 'Number', default: '0', description: 'Sets progress bar progress in scale 0-100.'},
      {name: 'indeterminate', type: 'Boolean', default: 'false', description: 'Renders infinite progress bar.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        indeterminate: true,
        code: `<va-progress-indicator :progress='0.3'></va-progress-indicator>
<va-progress-indicator indeterminate></va-progress-indicator>
<va-progress-indicator :indeterminate='indeterminate' :progress="0.5"></va-progress-indicator>`,
      }
    },

    mounted() {
      setTimeout(() => this.indeterminate = false, 1000)
    }
  }
</script>
