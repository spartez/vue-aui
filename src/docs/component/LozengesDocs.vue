<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Button types</h3>
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-lozenge>default</va-lozenge>
            <va-lozenge type="success">success</va-lozenge>
            <va-lozenge type="error">error</va-lozenge>
            <va-lozenge type="current">current</va-lozenge>
            <va-lozenge type="complete">complete</va-lozenge>
            <va-lozenge type="moved">moved</va-lozenge>
          </p>
          <p>
            <va-lozenge subtle>default</va-lozenge>
            <va-lozenge type="success" subtle>success</va-lozenge>
            <va-lozenge type="error" subtle>error</va-lozenge>
            <va-lozenge type="current" subtle>current</va-lozenge>
            <va-lozenge type="complete" subtle>complete</va-lozenge>
            <va-lozenge type="moved" subtle>moved</va-lozenge>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-lozenge" :props="[
      {name: 'type', type: 'String', default: 'medium', description: 'Available: \'success\', \'error\', \'current\', \'complete\', \'moved\''},
      {name: 'subtle', type: 'Boolean', default: 'false', description: 'Renders subtle lozenge without background.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<va-lozenge>default</va-lozenge>
<va-lozenge type="success">success</va-lozenge>
<va-lozenge type="error">error</va-lozenge>
<va-lozenge type="current">current</va-lozenge>
<va-lozenge type="complete">complete</va-lozenge>
<va-lozenge type="moved">moved</va-lozenge>

<va-lozenge subtle>default</va-lozenge>
<va-lozenge type="success" subtle>success</va-lozenge>
<va-lozenge type="error" subtle>error</va-lozenge>
<va-lozenge type="current" subtle>current</va-lozenge>
<va-lozenge type="complete" subtle>complete</va-lozenge>
<va-lozenge type="moved" subtle>moved</va-lozenge>`,
        code2: `<aui-button disabled>Button</aui-button>
<aui-button light>Light</aui-button>
<aui-button subtle>Subtle</aui-button>
<aui-button compact>Compact</aui-button>`,
        code3: `<aui-button type="link" href="#">Link 1</aui-button>
<aui-button type="link" href="#">Link 2</aui-button>`,
      }
    }
  }
</script>
