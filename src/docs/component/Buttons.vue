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
