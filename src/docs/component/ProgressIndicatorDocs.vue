<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-progress-indicator :progress='0.3'></va-progress-indicator>
          </p>
          <p>
            <va-progress-indicator indeterminate></va-progress-indicator>
          </p>
          <p>
            <va-progress-indicator :indeterminate='indeterminate' :progress="0.5"></va-progress-indicator>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-progress-indicator" :props="[
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
