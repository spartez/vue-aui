F
<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example">
          <va-progress-tracker>
            <va-progress-tracker-step>First Step</va-progress-tracker-step>
            <va-progress-tracker-step>Second Step</va-progress-tracker-step>
            <va-progress-tracker-step active>Third Step</va-progress-tracker-step>
          </va-progress-tracker>

          <va-progress-tracker>
            <va-progress-tracker-step active><a href="#">First Link</a></va-progress-tracker-step>
            <va-progress-tracker-step><a href="#">Second Link</a></va-progress-tracker-step>
            <va-progress-tracker-step><a href="#">Third Link</a></va-progress-tracker-step>
            <va-progress-tracker-step><a href="#">Fourth Link</a></va-progress-tracker-step>
          </va-progress-tracker>

          <va-progress-tracker>
            <va-progress-tracker-step>First Step</va-progress-tracker-step>
            <va-progress-tracker-step>Second Step</va-progress-tracker-step>
            <va-progress-tracker-step active>Third Step</va-progress-tracker-step>
            <va-progress-tracker-step>Fourth Step</va-progress-tracker-step>
            <va-progress-tracker-step>Fifth Step</va-progress-tracker-step>
          </va-progress-tracker>
        </va-tab>


        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
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
  import {stripIndent} from "common-tags";

  export default {
    data() {
      return {
        code: stripIndent`
            <va-progress-tracker>
              <va-progress-tracker-step>First Step</va-progress-tracker-step>
              <va-progress-tracker-step>Second Step</va-progress-tracker-step>
              <va-progress-tracker-step active>Third Step</va-progress-tracker-step>
            </va-progress-tracker>

            <va-progress-tracker>
              <va-progress-tracker-step active><a href="#">First Link</a></va-progress-tracker-step>
              <va-progress-tracker-step><a href="#">Second Link</a></va-progress-tracker-step>
              <va-progress-tracker-step><a href="#">Third Link</a></va-progress-tracker-step>
              <va-progress-tracker-step><a href="#">Fourth Link</a></va-progress-tracker-step>
            </va-progress-tracker>

            <va-progress-tracker>
              <va-progress-tracker-step>First Step</va-progress-tracker-step>
              <va-progress-tracker-step>Second Step</va-progress-tracker-step>
              <va-progress-tracker-step active>Third Step</va-progress-tracker-step>
              <va-progress-tracker-step>Fourth Step</va-progress-tracker-step>
              <va-progress-tracker-step>Fifth Step</va-progress-tracker-step>
            </va-progress-tracker>`
      }
    }
  }
</script>
