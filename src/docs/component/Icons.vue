<template>
  <div class="aui-group">
    <div class="aui-item">
      <aui-tabs>
        <aui-tab name="Example">
          <p>
            <aui-icon>wait</aui-icon>
            <aui-icon>add</aui-icon>
            <aui-icon>bitbucket</aui-icon>
          </p>
          <p>
            <aui-icon size="large">like</aui-icon>
            <aui-icon size="large">user</aui-icon>
            <aui-icon size="large">approve</aui-icon>
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>

    <div class="aui-item">
      <api-table name="aui-avatar" :props="[
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
        code: `<aui-icon>wait</aui-icon>
<aui-icon>add</aui-icon>
<aui-icon>bitbucket</aui-icon>

<aui-icon size="large">like</aui-icon>
<aui-icon size="large">user</aui-icon>
<aui-icon size="large">approve</aui-icon>`,
      }
    }
  }
</script>
