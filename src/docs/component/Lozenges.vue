<template>
  <div>
    <h3>Button types</h3>
    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-lozenge>default</aui-lozenge>
          <aui-lozenge type="success">success</aui-lozenge>
          <aui-lozenge type="error">error</aui-lozenge>
          <aui-lozenge type="current">current</aui-lozenge>
          <aui-lozenge type="complete">complete</aui-lozenge>
          <aui-lozenge type="moved">moved</aui-lozenge>
        </p>
        <p>
          <aui-lozenge subtle>default</aui-lozenge>
          <aui-lozenge type="success" subtle>success</aui-lozenge>
          <aui-lozenge type="error" subtle>error</aui-lozenge>
          <aui-lozenge type="current" subtle>current</aui-lozenge>
          <aui-lozenge type="complete" subtle>complete</aui-lozenge>
          <aui-lozenge type="moved" subtle>moved</aui-lozenge>
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
      </aui-tab>
    </aui-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-lozenge>default</aui-lozenge>
<aui-lozenge type="success">success</aui-lozenge>
<aui-lozenge type="error">error</aui-lozenge>
<aui-lozenge type="current">current</aui-lozenge>
<aui-lozenge type="complete">complete</aui-lozenge>
<aui-lozenge type="moved">moved</aui-lozenge>

<aui-lozenge subtle>default</aui-lozenge>
<aui-lozenge type="success" subtle>success</aui-lozenge>
<aui-lozenge type="error" subtle>error</aui-lozenge>
<aui-lozenge type="current" subtle>current</aui-lozenge>
<aui-lozenge type="complete" subtle>complete</aui-lozenge>
<aui-lozenge type="moved" subtle>moved</aui-lozenge>`,
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
