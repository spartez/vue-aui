<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Button types</h3>

      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-button @click="thanks">Click me!</va-button>
          </p>
          <p>
            <va-button type="primary">Primary button</va-button>
          </p>
          <p>
            <va-button type="link">Button link</va-button>
          </p>
          <p>
            <va-buttons>
              <va-button>Edit</va-button>
              <va-button>Delete</va-button>
            </va-buttons>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
      <h3>Button variations</h3>

      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-button disabled>Button</va-button>
          </p>
          <p>
            <va-button light>Light</va-button>
          </p>
          <p>
            <va-button subtle>Subtle</va-button>
          </p>
          <p>
            <va-button compact>Compact</va-button>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </va-tab>
      </va-tabs>
      <h3>Button as link</h3>

      <va-tabs>
        <va-tab name="Example">
          <p>
            Just add href to the button.
          </p>
          <p>
            <va-button type="link" href="#">Link 1</va-button>
            <va-button type="link" href="#">Link 2</va-button>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code3'></code></pre>
        </va-tab>
      </va-tabs>

    </div>
    <div class="aui-item">
      <api-table name="va-button" :props="[
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
        code: `<va-button @click="thanks">Button</va-button>
<va-button type="primary">Primary button</va-button>
<va-button type="link">Button link</va-button>

<va-buttons>
  <va-button>Edit</va-button>
  <va-button>Delete</va-button>
</va-buttons>`,
        code2: `<va-button disabled>Button</va-button>
<va-button light>Light</va-button>
<va-button subtle>Subtle</va-button>
<va-button compact>Compact</va-button>`,
        code3: `<va-button type="link" href="#">Link 1</va-button>
<va-button type="link" href="#">Link 2</va-button>`,
      }
    },

    methods: {
      thanks() {
        alert('Thanks!')
      }
    }
  }
</script>
