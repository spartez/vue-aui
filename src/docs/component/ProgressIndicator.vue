<template>
  <div class="aui-group">
    <div class="aui-item">
      <aui-tabs>
        <aui-tab name="Example">
          <p>
            <aui-progress-indicator :progress='0.3'></aui-progress-indicator>
          </p>
          <p>
            <aui-progress-indicator indeterminate></aui-progress-indicator>
          </p>
          <p>
            <aui-progress-indicator :indeterminate='indeterminate' :progress="0.5"></aui-progress-indicator>
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>

    <div class="aui-item">
      <api-table name="aui-progress-indicator" :props="[
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
        code: `<aui-progress-indicator :progress='0.3'></aui-progress-indicator>
<aui-progress-indicator indeterminate></aui-progress-indicator>
<aui-progress-indicator :indeterminate='indeterminate' :progress="0.5"></aui-progress-indicator>`,
      }
    },

    mounted() {
      setTimeout(() => this.indeterminate = false, 1000)
    }
  }
</script>
