<template>
  <div>
    <aui-tabs>
      <aui-tab name="Example">

        <aui-dialog title="Example dialog" show-close-button width="600px" height="100px" max-height="300px"
                    @onClose="alert('Close clicked')">
          Dialog 2 content
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
        code: `<aui-dialog title="Example dialog" show-close-button width="600px" height="100px" max-height="300px"
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
