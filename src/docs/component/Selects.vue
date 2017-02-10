<template>
  <div>
    <h2>Select2 Single</h2>

    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-select2-single v-model="selectValue" placeholder="Select value" allow-clear>
            <aui-select2-option value="value1">Option 1</aui-select2-option>
            <aui-select2-option value="value2">Option 2</aui-select2-option>
          </aui-select2-single>
          <span>{{selectValue}}</span>
        </p>

        <p>
          <aui-select2-single v-model="selectValue2" placeholder="Select value" class="custom-class">
            <aui-select2-option value="value1">Any value</aui-select2-option>
          </aui-select2-single>
          <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
        </p>

        <h5>Single select with default value and options loaded asynchronously</h5>
        <p>
          <aui-select2-single v-model="selectInitialValue" class="custom-class">
            <aui-select2-option :value="value" v-for="value in asyncValues">{{ value }}</aui-select2-option>
          </aui-select2-single>
          <button class="aui-button aui-button-link" @click="selectInitialValue = undefined">Clear value</button>
          <button class="aui-button aui-button-link" @click="selectInitialValue = 'value1'">Set</button>
          ({{selectInitialValue}})
        </p>

        <h5>Single select with asynchronous query for options</h5>
        <p>
          <aui-select2-single v-model="selectValueAsync" class="custom-class"
                              :query="queryValues"
                              :init-selection="initialValue"></aui-select2-single>
          ({{selectValueAsync}})
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code1'></code></pre>
      </aui-tab>

    </aui-tabs>

    <h2>Select2 Multi</h2>

    <aui-tabs>
      <aui-tab name="Example">
        <p>
        <form class="aui">
          <aui-select2-multi v-model="selectValues" class="custom-class2">
            <aui-select2-option value="value1">Value 1</aui-select2-option>
            <aui-select2-option value="value2">Value 2</aui-select2-option>
            <aui-select2-option value="value3">Value 3</aui-select2-option>
          </aui-select2-multi>
        </form>
        <span>{{selectValues}}</span>

        <form class="aui">
          <aui-select2-multi v-model="selectTags" tags-mode sortable>
            <aui-select2-option value="tag1">Tag 1</aui-select2-option>
            <aui-select2-option value="tag2">Tag 2</aui-select2-option>
          </aui-select2-multi>
        </form>
        <span>{{selectTags}}</span>
        </p>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
      </aui-tab>
    </aui-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectValue: 'value1',
        selectInitialValue: 'value1',
        asyncValues: [],
        selectValue2: undefined,
        selectValueAsync: "initialValue",
        selectValues: ['value1'],
        selectTags: ["tag1"],

        code1: `<p>
  <aui-select2-single v-model="selectValue" placeholder="Select value" allow-clear>
    <aui-select2-option value="value1">Option 1</aui-select2-option>
    <aui-select2-option value="value2">Option 2</aui-select2-option>
  </aui-select2-single>
  <span>{{selectValue}}</span>
</p>

<p>
  <aui-select2-single v-model="selectValue2" placeholder="Select value" class="custom-class">
    <aui-select2-option value="value1">Any value</aui-select2-option>
  </aui-select2-single>
  <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
</p>

<h5>Single select with default value and options loaded asynchronously</h5>
<p>
  <aui-select2-single v-model="selectInitialValue" class="custom-class">
    <aui-select2-option :value="value" v-for="value in asyncValues">{{ value }}</aui-select2-option>
  </aui-select2-single>
  <button class="aui-button aui-button-link" @click="selectInitialValue = undefined">Clear value</button>
  <button class="aui-button aui-button-link" @click="selectInitialValue = 'value1'">Set</button>
  ({{selectInitialValue}})
</p>

<h5>Single select with asynchronous query for options</h5>
<p>
  <aui-select2-single v-model="selectValueAsync" class="custom-class"
                      :query="queryValues"
                      :init-selection="initialValue"></aui-select2-single>
  ({{selectValueAsync}})
</p>
`,
        code2: `<form class="aui">
  <aui-select2-multi v-model="selectValues" class="custom-class2">
    <aui-select2-option value="value1">Value 1</aui-select2-option>
    <aui-select2-option value="value2">Value 2</aui-select2-option>
    <aui-select2-option value="value3">Value 3</aui-select2-option>
  </aui-select2-multi>
</form>
<span>{{selectValues}}</span>

<form class="aui">
  <aui-select2-multi v-model="selectTags" tags-mode sortable>
    <aui-select2-option value="tag1">Tag 1</aui-select2-option>
    <aui-select2-option value="tag2">Tag 2</aui-select2-option>
  </aui-select2-multi>
</form>
<span>{{selectTags}}</span>
`
      }
    },

    mounted() {
      setTimeout(() => {
        this.asyncValues = ["value1", "value2"]
      }, 1000)
    },

    methods: {
      queryValues(query) {
        if (query.term === undefined) {
        } else if (query.term === '') {
          query.callback({results: [{id: 'me', text: "Me"}]})
        } else {
          setTimeout(() =>
            query.callback({
              results: [
                {id: query.term, text: query.term},
                {id: query.term + 3, text: query.term + 3},
              ]
            }), 200);
        }
      },

      initialValue(element, callback) {
        setTimeout(() => callback({id: "initialValue", text: "Initial Value"}), 300)

      }
    }
  }
</script>

<style scoped>
  .custom-class {
    width: 300px;
  }
</style>
