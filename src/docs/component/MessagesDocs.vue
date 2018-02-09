<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Basic usage</h3>
      <va-tabs>
        <va-tab name="Example">
          <va-message>The a very simple message.</va-message>
          <va-message type="success" title="Success!">
            <p>You have backed up your system to C:/backups/filename.xml.</p>
          </va-message>
          <va-message type="warning" title="Backing up attachments">
            <p>Attachments will not be backed up. This needs to be done manually.</p>
          </va-message>
          <va-message type="error" title="Destructive operation!">
            <p>Data import will wipe all existing content - make sure you backup first!</p>
          </va-message>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>

      <h3>Basic usage</h3>

      <va-tabs>
        <va-tab name="Example">
          <va-message type="success" closeable>Closable message</va-message>

          <va-message type="warning">
            <p>It's dark in here... just the way Grues like it.</p>
            <ul class="aui-nav-actions-list">
              <li>
                <button class="aui-button aui-button-link">Turn on the light</button>
              </li>
              <li>
                <button class="aui-button aui-button-link">Take your chances</button>
              </li>
            </ul>
          </va-message>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-message" :props="[
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
        code: `<va-message>The a very simple message.</va-message>
<va-message type="success" title="Success!">
  <p>You have backed up your system to C:/backups/filename.xml.</p>
</va-message>
<va-message type="warning" title="Backing up attachments">
  <p>Attachments will not be backed up. This needs to be done manually.</p>
</va-message>
<va-message type="error" title="Destructive operation!">
  <p>Data import will wipe all existing content - make sure you backup first!</p>
</va-message>`,
        code2: `<va-message type="success" closeable>Closable message</va-message>

<va-message type="warning">
  <p>It's dark in here... just the way Grues like it.</p>
  <ul class="aui-nav-actions-list">
    <li><button class="aui-button aui-button-link">Turn on the light</button></li>
    <li><button class="aui-button aui-button-link">Take your chances</button></li>
  </ul>
</va-message>`,
      }
    }
  }
</script>
