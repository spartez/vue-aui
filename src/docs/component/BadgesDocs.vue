<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-badge>1</va-badge>
            <va-badge primary>2</va-badge>
            <va-badge>3</va-badge>
            <va-badge primary>4</va-badge>
            <va-badge>5</va-badge>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-badge" :props="[
      {name: 'primary', type: 'Boolean', default: 'false', description: 'Renders badge as primary.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<va-badge>1</va-badge>
<va-badge primary>2</va-badge>
<va-badge>3</va-badge>
<va-badge primary>4</va-badge>
<va-badge>5</va-badge>`,
      }
    }
  }
</script>
