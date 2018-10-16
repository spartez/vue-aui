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

      <h3>Transitions</h3>

      <va-tabs>
        <va-tab name="Example">
          <va-message class="go-flex" transition="fade-in" v-show="fadeIn">
            <span>Fade in</span>
            <span class="spacer"></span>
            <va-button @click="toggle('fadeIn')" type="primary">Toggle</va-button>
          </va-message>
          <va-message class="go-flex" transition="fade-in-top" v-show="fadeInTop">
            <span>Fade in top</span>
            <span class="spacer"></span>
            <va-button @click="toggle('fadeInTop')" type="primary">Toggle</va-button>
          </va-message>
          <va-message class="go-flex" transition="fade-in-bottom" v-show="fadeInBottom">
            <span>Fade in bottom</span>
            <span class="spacer"></span>
            <va-button @click="toggle('fadeInBottom')" type="primary">Toggle</va-button>
          </va-message>
          <va-message class="go-flex" :transition="fadeOut ? 'fade-out' : ''">
            <span>Fade out</span>
            <span class="spacer"></span>
            <va-button @click="toggle('fadeOut')" type="primary">Toggle</va-button>
          </va-message>
          <va-message class="go-flex" :transition="fadeOutTop ? 'fade-out-top' : ''">
            <span>Fade out top</span>
            <span class="spacer"></span>
            <va-button @click="toggle('fadeOutTop')" type="primary">Toggle</va-button>
          </va-message>
          <va-message class="go-flex" :transition="fadeOutBottom ? 'fade-out-bottom' : ''">
            <span>Fade out bottom</span>
            <span class="spacer"></span>
            <va-button @click="toggle('fadeOutBottom')" type="primary">Toggle</va-button>
          </va-message>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code3'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-message" :props="[
      {name: 'title', type: 'String', description: 'Bold title of the message.'},
      {name: 'type', type: 'String', default: 'info', description: 'Colored type of a message. Values: error, warning, success, info.'},
      {name: 'transition', type: 'String', description: 'Transitions of the message. Available values are: fade-in, fade-in-top, fade-in-bottom, fade-out, fade-out-top, fade-out-bottom.'},
    ]" :slots="[
      {name: 'default', description: 'Renders dialog contents.'}
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
        code3: `<va-message transition="fade-in">
    <span>Fade in</span>
</va-message>

<va-message transition="fade-in-top">
    <span>Fade in top</span>
</va-message>

<va-message transition="fade-in-bottom">
    <span>Fade in bottom</span>
</va-message>

<va-message transition="fade-out">
    <span>Fade out</span>
</va-message>

<va-message transition="fade-out-top">
    <span>Fade out top</span>
</va-message>

<va-message transition="fade-out-bottom">
    <span>Fade out bottom</span>
</va-message>`,
        fadeIn: true,
        fadeInTop: true,
        fadeInBottom: true,
        fadeOut: false,
        fadeOutTop: false,
        fadeOutBottom: false
      }
    },
    methods: {
      toggle(fadeName) {
        this[fadeName] = !this[fadeName];
        setTimeout(() => { this[fadeName] = !this[fadeName]; }, 800);
      }
    }
  }
</script>

<style scoped>
.go-flex {
  display: flex;
  flex-flow: row nowrap;
}

.spacer {
  flex-grow: 1;
}
</style>
