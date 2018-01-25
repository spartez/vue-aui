<template>
  <div class="aui-group">
    <div class="aui-item">
      <aui-tabs>
        <aui-tab name="Example">
          <h3>Standard spinner similar to aui-wait</h3>
          <aui-spinner></aui-spinner>
          <aui-spinner :spin="isSpinning"></aui-spinner>
          <h3>Various spinners</h3>
          <p>
            <aui-spinner :radius="40" :length="30" :width="16"></aui-spinner>
            <aui-spinner :radius="30" :width="8" :length="15"></aui-spinner>
            <aui-spinner :radius="15" :width="4" :length="8"></aui-spinner>
            <aui-spinner :radius="8" :length="6" :width="2"></aui-spinner>
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>

    <div class="aui-item">
      <api-table name="aui-spinner" :props="[
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
  export default {
    data() {
      return {
        code: `<aui-spinner></aui-spinner>
<aui-spinner :spin="isSpinning"></aui-spinner>

<aui-spinner :radius="40" :length="30" :width="16"></aui-spinner>
<aui-spinner :radius="30" :width="8" :length="15"></aui-spinner>
<aui-spinner :radius="15" :width="4" :length="8"></aui-spinner>
<aui-spinner :radius="8" :length="6" :width="2"></aui-spinner>`,

        isSpinning: true
      }
    },

    mounted() {
      setInterval(() => this.isSpinning = !this.isSpinning, 1000)
    }
  }
</script>
