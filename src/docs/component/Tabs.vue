<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example">
          <va-tabs>
            <va-tab name="Tab 1">
              <h3>Tab 1</h3>
              <p>This is content of tab 1</p>
            </va-tab>
            <va-tab name="Tab 2">
              <h3>Tab 2</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into
                electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release
                of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </va-tab>
          </va-tabs>
        </va-tab>

        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-tabs" :slots="[
        {name: 'default', description: 'Container for va-tab elements.'},
      ]">
      </api-table>
      <api-table name="va-tab" :props="[
      {name: 'name', type: 'String', description: 'Tab title.'},
    ]" :slots="[
      {name: 'default', description: 'Tab contents.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<va-tabs>
  <va-tab name="Tab 1">
    <h3>Tab 1</h3>
    <p>This is content of tab 1</p>
  </va-tab>
  <va-tab name="Tab 2">
    <h3>Tab 2</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
      Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
      PageMaker including versions of Lorem Ipsum.
    </p>
  </va-tab>
</va-tabs>
`
      }
    }
  }
</script>
