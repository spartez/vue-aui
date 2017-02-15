<template>
  <div>
    <h3>Toggle button</h3>
    <aui-tabs>
      <aui-tab name="Example">
        <h3>Button types</h3>
        <p>
          <aui-button>Button</aui-button>
          <aui-button type="primary">Primary button</aui-button>
          <aui-button type="link">Button link</aui-button>
        </p>
        <h3>Button variations</h3>
        <p>
          <aui-button disabled>Button</aui-button>
          <aui-button light>Light</aui-button>
          <aui-button subtle>Subtle</aui-button>
          <aui-button compact>Compact</aui-button>
        </p>
        <h3>Button as link</h3>
        <p>
          Just add href to the button.
        </p>
        <p>
          <aui-button type="link" href="#">Link 1</aui-button>
          <aui-button type="link" href="#">Link 2</aui-button>
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
        code: `<h3>Button types</h3>
<p>
  <aui-button>Button</aui-button>
  <aui-button type="primary">Primary button</aui-button>
  <aui-button type="link">Button link</aui-button>
</p>
<h3>Button variations</h3>
<p>
  <aui-button disabled>Button</aui-button>
  <aui-button light>Light</aui-button>
  <aui-button subtle>Subtle</aui-button>
  <aui-button compact>Compact</aui-button>
</p>
<h3>Button as link</h3>
<p>
  Just add href to the button.
</p>
<p>
  <aui-button type="link" href="#">Link 1</aui-button>
  <aui-button type="link" href="#">Link 2</aui-button>
</p>`
      }
    }
  }
</script>
