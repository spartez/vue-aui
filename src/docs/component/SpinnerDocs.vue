<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-message>
        AUI 7.7 introduced spinner web component {{`&lt;aui-spinner&gt;`}} which functionally replaces {{`&lt;va-spinner&gt;`}}.
        You can still use {{`&lt;va-spinner&gt;`}} on AUI older than 7.7. See
        <a href="https://docs.atlassian.com/aui/latest/docs/spinner.html" target="_blank">
          aui-spinner web component documentation</a>.
      </va-message>
      <va-tabs>
        <va-tab name="Deprecated code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-spinner" is-deprecated :props="[
      {name: 'spin', type: 'Boolean', default: 'true', description: 'Controls visibility of the spinner.'},
      {name: 'radius', type: 'Number', default: '3', description: 'Radius of the empty circle between the lines.'},
      {name: 'width', type: 'Number', default: '2', description: 'Width of the line.'},
      {name: 'length', type: 'Number', default: '3', description: 'Length of a single line.'},
      {name: 'color', type: 'String', default: '#172b4d', description: 'Spinner color.'},
    ]">
      </api-table>
    </div>
  </div>

</template>

<script>
  import {stripIndent} from "common-tags";

  export default {
    data() {
      return {
        code: stripIndent`
            <va-spinner></va-spinner>
            <va-spinner :spin="isSpinning"></va-spinner>

            <va-spinner :radius="40" :length="30" :width="16"></va-spinner>
            <va-spinner :radius="30" :width="8" :length="15"></va-spinner>
            <va-spinner :radius="15" :width="4" :length="8"></va-spinner>
            <va-spinner :radius="8" :length="6" :width="2"></va-spinner>`,
        isSpinning: true
      }
    },

    mounted() {
      setInterval(() => this.isSpinning = !this.isSpinning, 1000)
    }
  }
</script>
