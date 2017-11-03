<template>
  <div>
    <h3>Button types</h3>
    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <AuiButton>Button</AuiButton>
        </p>
        <p>
          <AuiButton type="primary">Primary button</AuiButton>
        </p>
        <p>
          <AuiButton type="link">Button link</AuiButton>
        </p>
        <p>
          <AuiButtons>
            <AuiButton>Edit</AuiButton>
            <AuiButton>Delete</AuiButton>
          </AuiButtons>
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
      </aui-tab>
    </aui-tabs>
    <h3>Button variations</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <AuiButton disabled>Button</AuiButton>
        </p>
        <p>
          <AuiButton light>Light</AuiButton>
        </p>
        <p>
          <AuiButton subtle>Subtle</AuiButton>
        </p>
        <p>
          <AuiButton compact>Compact</AuiButton>
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
      </aui-tab>
    </aui-tabs>
    <h3>Button as link</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <p>
          Just add href to the button.
        </p>
        <p>
          <AuiButton type="link" href="#">Link 1</AuiButton>
          <AuiButton type="link" href="#">Link 2</AuiButton>
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code3'></code></pre>
      </aui-tab>
    </aui-tabs>

  </div>
</template>

<script>
  import { AuiButton, AuiButtons } from '../../components/VueAui';

  export default {
    components: { AuiButton, AuiButtons },
    data() {
      return {
        code: `<AuiButton>Button</AuiButton>
<AuiButton type="primary">Primary button</AuiButton>
<AuiButton type="link">Button link</AuiButton>

<AuiButtons>
  <AuiButton>Edit</AuiButton>
  <AuiButton>Delete</AuiButton>
</AuiButtons>`,
        code2: `<AuiButton disabled>Button</AuiButton>
<AuiButton light>Light</AuiButton>
<AuiButton subtle>Subtle</AuiButton>
<AuiButton compact>Compact</AuiButton>`,
        code3: `<AuiButton type="link" href="#">Link 1</AuiButton>
<AuiButton type="link" href="#">Link 2</AuiButton>`,
      }
    }
  }
</script>
