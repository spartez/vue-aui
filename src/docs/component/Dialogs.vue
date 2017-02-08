<template>
  <div>
    <h2>Dialog</h2>

    <h3>Examples</h3>
    <aui-dialog title="Example dialog" cancel-button="Cancel" @onClose="alert('Close clicked')">
      Dialog content
    </aui-dialog>
    <pre v-highlightjs><code class="xml" v-text='code1'></code></pre>

    <h4>All options</h4>
    <aui-dialog title="Example dialog" :show-close-button="'true'" width="600px" height="100px" max-height="300px"
                @onClose="alert('Close clicked')">
      Dialog content
      <div slot="header-actions">
        <button class="aui-button aui-button-light">Settings</button>
      </div>
      <div slot="footer-actions">
        <button class="aui-button aui-button-primary">Confirm</button>
      </div>
      <div slot="footer-hint">
        Focus dialog and type ESC to close it.
      </div>
    </aui-dialog>
    <h3>Usage</h3>
    <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code1: `<aui-dialog title="Example dialog" cancel-button="Cancel" @onClose="alert('Close clicked')">
  Dialog content
</aui-dialog>
`,
        code2: `<aui-dialog title="Example dialog" :show-close-button="'true'" width="600px" height="100px" max-height="300px"
            @onClose="alert('Close clicked')">
  Dialog content
  <div slot="header-actions">
    <button class="aui-button aui-button-light">Settings</button>
  </div>
  <div slot="footer-actions">
    <button class="aui-button aui-button-primary">Confirm</button>
  </div>
  <div slot="footer-hint">
    Focus dialog and type ESC to close it.
  </div>
</aui-dialog>
`
      }
    },
    methods: {
      alert(text) {
        alert(text)
      }
    }
  }
</script>
