<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Button types</h3>

      <aui-tabs>
        <aui-tab name="Example">
          <p>
            <aui-button @click="thanks">Click me!</aui-button>
          </p>
          <p>
            <aui-button type="primary">Primary button</aui-button>
          </p>
          <p>
            <aui-button type="link">Button link</aui-button>
          </p>
          <p>
            <aui-buttons>
              <aui-button>Edit</aui-button>
              <aui-button>Delete</aui-button>
            </aui-buttons>
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
            <aui-button disabled>Button</aui-button>
          </p>
          <p>
            <aui-button light>Light</aui-button>
          </p>
          <p>
            <aui-button subtle>Subtle</aui-button>
          </p>
          <p>
            <aui-button compact>Compact</aui-button>
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
            <aui-button type="link" href="#">Link 1</aui-button>
            <aui-button type="link" href="#">Link 2</aui-button>
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code3'></code></pre>
        </aui-tab>
      </aui-tabs>

    </div>
    <div class="aui-item">
      <api-table :props="[
      {name: 'compact', type: 'Boolean', default: 'false', description: 'Makes the button slightly smaller.'},
      {name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables the button.'},
      {name: 'href', type: 'String', default: '-', description: 'Renders the button as a link with specified href.'},
      {name: 'light', type: 'Boolean', default: 'false', description: 'Renders button in light color adjusted to dark background.'},
      {name: 'subtle', type: 'Boolean', default: 'false', description: 'Renders button without background'},
      {name: 'target', type: 'String', default: '-', description: 'Passes target the the rendered link.'},
      {name: 'type', type: 'String', default: '-', description: 'primary - renders primary button, link - button that looks like a link.'},
    ]" :events="[
      {name:'click', description: 'Delegates to native DOM events.'},
      {name:'mousedown'},
      {name:'mouseup'}
]">

      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-button @click="thanks">Button</aui-button>
<aui-button type="primary">Primary button</aui-button>
<aui-button type="link">Button link</aui-button>

<aui-buttons>
  <aui-button>Edit</aui-button>
  <aui-button>Delete</aui-button>
</aui-buttons>`,
        code2: `<aui-button disabled>Button</aui-button>
<aui-button light>Light</aui-button>
<aui-button subtle>Subtle</aui-button>
<aui-button compact>Compact</aui-button>`,
        code3: `<aui-button type="link" href="#">Link 1</aui-button>
<aui-button type="link" href="#">Link 2</aui-button>`,
      }
    },

    methods: {
      thanks() {
        alert('Thanks!')
      }
    }
  }
</script>
