F<template>
  <div class="aui-group">
    <div class="aui-item">
      <aui-tabs>
        <aui-tab name="Example">
          <aui-progress-tracker>
            <aui-progress-tracker-step>First Step</aui-progress-tracker-step>
            <aui-progress-tracker-step>Second Step</aui-progress-tracker-step>
            <aui-progress-tracker-step active>Third Step</aui-progress-tracker-step>
            <aui-progress-tracker-step>Fourth Step</aui-progress-tracker-step>
          </aui-progress-tracker>

          <aui-progress-tracker>
            <aui-progress-tracker-step active><a href="#">First Link</a></aui-progress-tracker-step>
            <aui-progress-tracker-step><a href="#">Second Link</a></aui-progress-tracker-step>
            <aui-progress-tracker-step><a href="#">Third Link</a></aui-progress-tracker-step>
            <aui-progress-tracker-step><a href="#">Fourth Link</a></aui-progress-tracker-step>
          </aui-progress-tracker>
        </aui-tab>

        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>

    <div class="aui-item">
      <api-table name="aui-progress-tracker" :slots="[
        {name: 'default', description: 'Container for aui-progress-tracker-step elements.'},
      ]">
      </api-table>
      <api-table name="aui-progress-tracker-step" :props="[
      {name: 'active', type: 'Boolean', default: 'false', description: 'Set progress to this step.'},
    ]" :slots="[
      {name: 'default', description: 'Step label content.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-progress-tracker>
  <aui-progress-tracker-step>First Step</aui-progress-tracker-step>
  <aui-progress-tracker-step>Second Step</aui-progress-tracker-step>
  <aui-progress-tracker-step active>Third Step</aui-progress-tracker-step>
  <aui-progress-tracker-step>Fourth Step</aui-progress-tracker-step>
</aui-progress-tracker>

<aui-progress-tracker>
  <aui-progress-tracker-step active><a href="#">First Link</a></aui-progress-tracker-step>
  <aui-progress-tracker-step><a href="#">Second Link</a></aui-progress-tracker-step>
  <aui-progress-tracker-step><a href="#">Third Link</a></aui-progress-tracker-step>
  <aui-progress-tracker-step><a href="#">Fourth Link</a></aui-progress-tracker-step>
</aui-progress-tracker>
`
      }
    }
  }
</script>
