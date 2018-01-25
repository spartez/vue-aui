<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Basic usage</h3>
      <aui-tabs>
        <aui-tab name="Example">
          <aui-message>The a very simple message.</aui-message>
          <aui-message type="success" title="Success!">
            <p>You have backed up your system to C:/backups/filename.xml.</p>
          </aui-message>
          <aui-message type="warning" title="Backing up attachments">
            <p>Attachments will not be backed up. This needs to be done manually.</p>
          </aui-message>
          <aui-message type="error" title="Destructive operation!">
            <p>Data import will wipe all existing content - make sure you backup first!</p>
          </aui-message>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </aui-tab>
      </aui-tabs>

      <h3>Basic usage</h3>

      <aui-tabs>
        <aui-tab name="Example">
          <aui-message type="success" closeable>Closable message</aui-message>

          <aui-message type="warning">
            <p>It's dark in here... just the way Grues like it.</p>
            <ul class="aui-nav-actions-list">
              <li>
                <button class="aui-button aui-button-link">Turn on the light</button>
              </li>
              <li>
                <button class="aui-button aui-button-link">Take your chances</button>
              </li>
            </ul>
          </aui-message>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>

    <div class="aui-item">
      <api-table name="aui-message" :props="[
      {name: 'title', type: 'String', description: 'Bold title of the message.'},
      {name: 'type', type: 'String', default: 'info', description: 'Colored type of a message. Values: error, warning, success, info.'},
    ]" :slots="[
      {name: 'default', description: 'Renders dialog contents.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-message>The a very simple message.</aui-message>
<aui-message type="success" title="Success!">
  <p>You have backed up your system to C:/backups/filename.xml.</p>
</aui-message>
<aui-message type="warning" title="Backing up attachments">
  <p>Attachments will not be backed up. This needs to be done manually.</p>
</aui-message>
<aui-message type="error" title="Destructive operation!">
  <p>Data import will wipe all existing content - make sure you backup first!</p>
</aui-message>`,
        code2: `<aui-message type="success" closeable>Closable message</aui-message>

<aui-message type="warning">
  <p>It's dark in here... just the way Grues like it.</p>
  <ul class="aui-nav-actions-list">
    <li><button class="aui-button aui-button-link">Turn on the light</button></li>
    <li><button class="aui-button aui-button-link">Take your chances</button></li>
  </ul>
</aui-message>`,
      }
    }
  }
</script>
