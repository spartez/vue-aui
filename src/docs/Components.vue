<template>
  <div>
    <h3>Toggle button</h3>
    <h4>Simple use</h4>
    <p>
      <aui-toggle-button v-model="toggle1"></aui-toggle-button>
      <span>{{toggle1}}</span>
    </p>
    <h4>Custimized (id, label, tooltips)</h4>
    <p>
      <aui-toggle-button v-model="toggle2" id="example-toggle" label="Switch me" tooltip-on="On"
                         tooltip-off="Off"></aui-toggle-button>
    </p>

    <h3>Select2 Single</h3>
    <p>
      <aui-select2-single v-model="selectValue" placeholder="Select any value">
        <aui-select2-option value="value1">Option 1</aui-select2-option>
        <aui-select2-option value="value2">Option 2</aui-select2-option>
      </aui-select2-single>
      <span>{{selectValue}}</span>
    </p>
    <p>
      <aui-select2-single v-model="selectValue2" placeholder="Select any value" class="custom-class">
        <aui-select2-option value="value1">Any value</aui-select2-option>
      </aui-select2-single>
      <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
    </p>

    <h3>Select2 Multi</h3>
    <p>
    <h4>Multiple options to choose</h4>
    <form class="aui">
      <aui-select2-multi v-model="selectValues">
        <aui-select2-option value="value1">Value 1</aui-select2-option>
        <aui-select2-option value="value2">Value 2</aui-select2-option>
        <aui-select2-option value="value3">Value 3</aui-select2-option>
      </aui-select2-multi>
    </form>
    <span>{{selectValues}}</span>

    <h4>Tags mode</h4>
    <form class="aui">
      <aui-select2-multi v-model="selectTags" tags-mode>
        <aui-select2-option value="tag1">Tag 1</aui-select2-option>
        <aui-select2-option value="tag2">Tag 2</aui-select2-option>
      </aui-select2-multi>
    </form>
    <span>{{selectTags}}</span>
    </p>

    <h3>Dialog</h3>
    <p>
      <aui-dialog title="Example dialog" cancel-button="Cancel" @onClose="alert('Close clicked')">
        Dialog content
      </aui-dialog>
    </p>
    <p>
      <aui-dialog title="Example dialog" :show-close-button="'true'" width="600px" height="100px" max-height="300px"
                  @onClose="alert('Close clicked')">
        Dialog content
        <div slot="header-actions">
          <button class="aui-button aui-button-light">Settings</button>
        </div>
        <div slot="footer-actions">
          <button class="aui-button aui-button-primary">Confirm</button>
        </div>
        <div slot="footer-hint">
          Focus dialog and type ESC to close it.
        </div>
      </aui-dialog>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toggle1: true,
        toggle2: false,
        selectValue: 'value1',
        selectValue2: undefined,
        selectValues: ['value1'],
        selectTags: ["tag1"]
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
  .custom-class {
    width: 300px;
  }
</style>
