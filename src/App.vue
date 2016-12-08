<template>
  <div>
    <nav class="aui-header aui-dropdown2-trigger-group" role="navigation" data-aui-responsive="true">
      <div class="aui-header-primary">
        <h1 id="logo" class="aui-header-logo aui-header-logo-aui">
          <a href="http://example.com/"><span class="aui-header-logo-device">AUI</span></a></h1>
      </div>
    </nav>

    <section>
      <div class="aui-page-panel">
        <div class="aui-page-panel-inner">
          <section class="aui-page-panel-content">
            <h3>Toggle button</h3>
            <h4>Simple use</h4>
            <p>
              <aui-toggle-button v-model="toggle1"></aui-toggle-button>
              <span>{{toggle1}}</span>
            </p>
            <p>
              <aui-toggle-button v-model="toggle1"></aui-toggle-button>
            </p>
            <h4>Custimized (id, label, tooltips)</h4>
            <p>
              <aui-toggle-button v-model="toggle2" id="example-toggle" label="Switch me"
                                 tooltip-on="On" tooltip-off="Off"></aui-toggle-button>
            </p>
          </section>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        toggle1: true,
        toggle2: false
      }
    }
  }
</script>
