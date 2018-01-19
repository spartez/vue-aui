<template>
  <div>
    <aui-tabs>
      <aui-tab name="Example" class="with-dialog-overlay">

        <aui-dialog title="Example dialog" show-close-button width="600px" height="200px" max-height="300px"
                    @onClose="alert('Close clicked')">
          Start...<br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          The end.<br>
          <div slot="header-actions">
            <aui-button light>Settings</aui-button>
          </div>
          <div slot="footer-actions">
            <aui-button type="primary">Confirm</aui-button>
            <aui-button>Next</aui-button>
            <aui-button type="link">Close</aui-button>
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
    <aui-button light>Settings</aui-button>
  </div>
  <div slot="footer-actions">
    <aui-button type="primary">Confirm</aui-button>
    <aui-button>Next</aui-button>
    <aui-button type="link">Close</aui-button>
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

<style scoped>
  .with-dialog-overlay {
    background: #999;
    padding-bottom: 50px;
  }
</style>
