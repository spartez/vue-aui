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

    <aui-tabs>
      <aui-tab name="Example" class="with-dialog-overlay">
        <aui-dialog title="Are you sure?" @onClose="alert('Close clicked')" size="small" no-padding warning>
          <div style="background: #FFBDAD; height: 100%">Fill without padding <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            End.
          </div>
          <div slot="footer-actions">
            <aui-button type="primary">Yes</aui-button>
            <aui-button type="link">Cancel</aui-button>
          </div>
        </aui-dialog>
      </aui-tab>

      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
      </aui-tab>
    </aui-tabs>

    <h3>Floating dialogs</h3>
    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-button @click="showFloatingDialog = true">Show dialog 1</aui-button>
          Is visible? {{showFloatingDialog}}
          <aui-dialog title="Are you sure?" @onClose="alert('Close clicked')" floating
                      :is-visible.sync="showFloatingDialog">
            <div>I'm dialog 1.</div>
            <div slot="footer-actions">
              <aui-button type="primary" @click="showFloatingDialog = false">Ok</aui-button>
            </div>
          </aui-dialog>
        </p>
        <p>
          <aui-button @click="showFloatingDialog2 = true">Show dialog 2</aui-button>
          Is visible? {{showFloatingDialog2}}
          <aui-dialog title="Are you sure?" @onClose="alert('Close clicked')" floating
                      :is-visible.sync="showFloatingDialog2">
            <div>I'm dialog 2.</div>
            <div slot="footer-actions">
              <aui-button type="primary" @click="showFloatingDialog2 = false">Ok</aui-button>
            </div>
          </aui-dialog>
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code3'></code></pre>
      </aui-tab>
    </aui-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFloatingDialog: false,
        showFloatingDialog2: false,
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
`,
        code2: `<aui-dialog title="Are you sure?" @onClose="alert('Close clicked')" size="small" no-padding warning>
  <div style="background: #FFBDAD; height: 100%">Fill without padding <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    End.
  </div>
  <div slot="footer-actions">
    <aui-button type="primary">Yes</aui-button>
    <aui-button type="link">Cancel</aui-button>
  </div>
</aui-dialog>`,
        code3: `<aui-button @click="showFloatingDialog = true">Show dialog 1</aui-button>
Is visible? {{showFloatingDialog}}
<aui-dialog title="Are you sure?" @onClose="alert('Close clicked')" floating
            :is-visible.sync="showFloatingDialog">
  <div>I'm dialog 1.</div>
  <div slot="footer-actions">
    <aui-button type="primary" @click="showFloatingDialog = false">Ok</aui-button>
  </div>
</aui-dialog>`
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
