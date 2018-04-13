<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-icon>wait</va-icon>
            <va-icon>add</va-icon>
            <va-icon>bitbucket</va-icon>
          </p>
          <p>
            <va-icon size="large">like</va-icon>
            <va-icon size="large">user</va-icon>
            <va-icon size="large">approve</va-icon>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-icon" :props="[
      {name: 'size', type: 'String', default: 'medium', description: 'Sets proper size aligned with AUI guidelines.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<va-icon>wait</va-icon>
<va-icon>add</va-icon>
<va-icon>bitbucket</va-icon>

<va-icon size="large">like</va-icon>
<va-icon size="large">user</va-icon>
<va-icon size="large">approve</va-icon>`,
      }
    }
  }
</script>
