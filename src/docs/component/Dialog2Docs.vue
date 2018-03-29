<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example" class="with-dialog-overlay">

          <va-dialog title="Example dialog" show-close-button width="600px" height="200px" max-height="300px"
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
              <va-button light>Settings</va-button>
            </div>
            <div slot="footer-actions">
              <va-button type="primary">Confirm</va-button>
              <va-button>Next</va-button>
              <va-button type="link">Close</va-button>
            </div>
            <div slot="footer-hint">
              Focus dialog and type ESC to close it.
            </div>
          </va-dialog>
        </va-tab>

        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>

      <va-tabs>
        <va-tab name="Example" class="with-dialog-overlay">
          <va-dialog title="Are you sure?" @onClose="alert('Close clicked')" size="small" no-padding warning>
            <div style="background: #FFBDAD; padding: 20px; height: 100%">Fill with custom padding<br>
              <br>
              End.
            </div>
            <div slot="footer-actions">
              <va-button type="primary">Yes</va-button>
              <va-button type="link">Cancel</va-button>
            </div>
          </va-dialog>
        </va-tab>

        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </va-tab>
      </va-tabs>

      <h3>Floating dialogs</h3>
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-button @click="showFloatingDialog = true">Show dialog 1</va-button>
            Is visible? {{showFloatingDialog}}
            <va-dialog title="Are you sure?" @onClose="alert('Close clicked')" floating
                        :is-visible.sync="showFloatingDialog">
              <div>I'm dialog 1.</div>
              <div slot="footer-actions">
                <va-button type="primary" @click="showFloatingDialog = false">Ok</va-button>
              </div>
            </va-dialog>
          </p>
          <p>
            <va-button @click="showFloatingDialog2 = true">Show dialog 2</va-button>
            Is visible? {{showFloatingDialog2}}
            <va-dialog title="Are you sure?" @close="alert('Close clicked')" floating
                        :is-visible.sync="showFloatingDialog2">
              <div>I'm dialog 2.</div>
              <div slot="footer-actions">
                <va-button type="primary" @click="showFloatingDialog2 = false">Ok</va-button>
              </div>
            </va-dialog>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code3'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-dialog" :props="[
      {name: 'cancel-button', type: 'String', default: '-', description: 'Shows cencel button with given text.'},
      {name: 'floating', type: 'Boolean', default: 'false', description: 'Hides the dialog content and enables programmatic control via is-visible prop. Dialog will be over the page on the glass.'},
      {name: 'height', type: 'String', default: '-', description: 'Set fixed height for the dialog.'},
      {name: 'is-visible', isSyncable: true, type: 'Boolean', default: 'true', description: 'Syncable. This param hides and shows the dialog in floating mode.'},
      {name: 'max-height', type: 'String', default: '-', description: 'Sets max dialog height.'},
      {name: 'max-width', type: 'String', default: '-', description: 'Sets max dialog width.'},
      {name: 'no-padding', type: 'Boolean', default: 'false', description: 'Clears out default dialog content padding.'},
      {name: 'show-close-button', type: 'Boolean', default: 'false', description: 'Shows close button on the top right corner. It emits close event after click.'},
      {name: 'size', type: 'String', default: 'medium', description: 'Allows setting one of AUI predefined window sizes: small, medium, large, xlarge.'},
      {name: 'title', type: 'String', default: '-', description: 'Sets dialog title.'},
      {name: 'warning', type: 'Boolean', default: 'false', description: 'Enables warning mode which sets header to red.'},
      {name: 'width', type: 'String', default: '-', description: 'Sets fixed width.'},
    ]" :events="[
      {name:'on-close', description: 'Use close instead.', isDeprecated: true},
      {name:'close', description: 'Triggered when closing X or ESC is pressed when a dialog is focused.'},
]">

      </api-table>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        showFloatingDialog: false,
        showFloatingDialog2: false,
        code: `<va-dialog title="Example dialog" show-close-button width="600px" height="100px" max-height="300px"
            @close="alert('Close clicked')">
  Dialog content
  <div slot="header-actions">
    <va-button light>Settings</va-button>
  </div>
  <div slot="footer-actions">
    <va-button type="primary">Confirm</va-button>
    <va-button>Next</va-button>
    <va-button type="link">Close</va-button>
  </div>
  <div slot="footer-hint">
    Focus dialog and type ESC to close it.
  </div>
</va-dialog>
`,
        code2: `<va-dialog title="Are you sure?" @close="alert('Close clicked')" size="small" no-padding warning>
  <div style="background: #FFBDAD; padding: 20px; height: 100%">Fill with custom padding<br>
    <br>
    End.
  </div>
  <div slot="footer-actions">
    <va-button type="primary">Yes</va-button>
    <va-button type="link">Cancel</va-button>
  </div>
</va-dialog>`,
        code3: `<va-button @click="showFloatingDialog = true">Show dialog 1</va-button>
Is visible? {{showFloatingDialog}}
<va-dialog title="Are you sure?" @onClose="alert('Close clicked')" floating
            :is-visible.sync="showFloatingDialog">
  <div>I'm dialog 1.</div>
  <div slot="footer-actions">
    <va-button type="primary" @click="showFloatingDialog = false">Ok</va-button>
  </div>
</va-dialog>`
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
