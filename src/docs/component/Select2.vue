<template>
  <div>
    <h3>Single select</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-select2-single v-model="selectValue" placeholder="Select value" allow-clear
                              :disabled="initiallyDisabled">
            <aui-select2-option value="value1" text="Option 1"></aui-select2-option>
            <aui-select2-option value="value2" text="Option 2"></aui-select2-option>
          </aui-select2-single>
          <span>{{selectValue}}</span>
        </p>

        <p>
          <aui-select2-single v-model="selectValue2" placeholder="Select value" class="custom-class">
            <aui-select2-option value="value1" text="Any value"></aui-select2-option>
          </aui-select2-single>
          <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
        </p>

        <h5>Default value and options loaded asynchronously</h5>
        <p>
          <aui-select2-single v-model="selectInitialValue" class="custom-class">
            <aui-select2-option v-for="value in asyncValues" :value="value" :text="value"></aui-select2-option>
          </aui-select2-single>
          <button class="aui-button aui-button-link" @click="selectInitialValue = undefined">Clear value</button>
          <button class="aui-button aui-button-link" @click="selectInitialValue = 'value1'">Set</button>
          ({{selectInitialValue}})
        </p>

        <h5>Values added asynchronously with :key provided. Should be in sorted order in the dropdown.</h5>
        <aui-select2-single v-model="selectedSortedValue">
          <aui-select2-option v-for="value in sortedValues" :key="value.id" :value="value.id" :text="value.text">
          </aui-select2-option>
        </aui-select2-single>
        <button class="aui-button aui-button-link" @click="simulateFetchingOfSortedValues">Simulate fetch again</button>
        <p>
          Compare with fetched values rendered via <em>span</em>: <span v-for="value in sortedValues" :key="value.id">{{value.text}}&nbsp</span>
        </p>

        <h5>Query for options</h5>
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

    <h3>Multi select</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <h5>With predefined set of options</h5>
        <form class="aui">
          <aui-select2-multi v-model="selectValues" class="custom-class2" placeholder="Select any value"
                             :disabled="initiallyDisabled">
            <aui-select2-option value="value1" text="Value 1"></aui-select2-option>
            <aui-select2-option value="value2" text="Value 2"></aui-select2-option>
            <aui-select2-option value="value3" text="Value 3"></aui-select2-option>
          </aui-select2-multi>
        </form>
        <span>{{selectValues}}</span>

        <h5>Tags mode - options are created dynamically</h5>
        <form class="aui">
          <aui-select2-multi v-model="selectTags" tags-mode sortable width="auto">
            <aui-select2-option value="tag1" text="Tag 1"></aui-select2-option>
            <aui-select2-option value="tag2" text="Tag 2"></aui-select2-option>
          </aui-select2-multi>
        </form>
        <span>{{selectTags}}</span>

        <h5>Query for options</h5>
        <form class="aui">
          <aui-select2-multi ref="asyncSelect" v-model="queryExample" :query="queryValues"
                             :init-selection="initialMultiValues">
          </aui-select2-multi>
        </form>
        <span>{{queryExample}}</span>

        <h5>Disabled with placeholder</h5>
        <form class="aui">
          <aui-select2-multi disabled placeholder="Disabled select">
          </aui-select2-multi>
        </form>
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
        queryExample: ["tag1", "tag2"],
        queryExampleLocked: ["tag1"],
        initiallyDisabled: true,
        unsortedValues: [],
        selectedSortedValue: undefined,

        code1: `<p>
  <aui-select2-single v-model="selectValue" placeholder="Select value" allow-clear :disabled="initiallyDisabled">
    <aui-select2-option value="value1" text="Option 1"></aui-select2-option>
    <aui-select2-option value="value2" text="Option 2"></aui-select2-option>
  </aui-select2-single>
  <span>{{selectValue}}</span>
</p>

<p>
  <aui-select2-single v-model="selectValue2" placeholder="Select value" class="custom-class">
    <aui-select2-option value="value1" text="Any value"></aui-select2-option>
  </aui-select2-single>
  <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
</p>

<h5>Default value and options loaded asynchronously</h5>
<p>
  <aui-select2-single v-model="selectInitialValue" class="custom-class">
    <aui-select2-option v-for="value in asyncValues" :value="value" :text="value"></aui-select2-option>
  </aui-select2-single>
  <button class="aui-button aui-button-link" @click="selectInitialValue = undefined">Clear value</button>
  <button class="aui-button aui-button-link" @click="selectInitialValue = 'value1'">Set</button>
  ({{selectInitialValue}})
</p>

<h5>Query for options</h5>
<p>
  <aui-select2-single v-model="selectValueAsync" class="custom-class"
                      :query="queryValues"
                      :init-selection="initialValue"></aui-select2-single>
  ({{selectValueAsync}})
</p>
`,
        code2: `<h5>With predefined set of options</h5>
<form class="aui">
  <aui-select2-multi v-model="selectValues" class="custom-class2" placeholder="Select any value" :disabled="initiallyDisabled">
    <aui-select2-option value="value1" text="Value 1"></aui-select2-option>
    <aui-select2-option value="value2" text="Value 2"></aui-select2-option>
    <aui-select2-option value="value3" text="Value 3"></aui-select2-option>
  </aui-select2-multi>
</form>
<span>{{selectValues}}</span>

<h5>Tags mode - options are created dynamically</h5>
<form class="aui">
  <aui-select2-multi v-model="selectTags" tags-mode sortable width="auto">
    <aui-select2-option value="tag1" text="Tag 1"></aui-select2-option>
    <aui-select2-option value="tag2" text="Tag 2"></aui-select2-option>
  </aui-select2-multi>
</form>
<span>{{selectTags}}</span>

<h5>Query for options</h5>
<form class="aui">
  <aui-select2-multi ref="asyncSelect" v-model="queryExample" :query="queryValues"
                     :init-selection="initialMultiValues">
  </aui-select2-multi>
</form>
<span>{{queryExample}}</span>

<h5>Disabled with placeholder</h5>
<form class="aui">
  <aui-select2-multi disabled placeholder="Disabled select">
  </aui-select2-multi>
</form>
`
      }
    },

    mounted() {
      setTimeout(() => {
        this.asyncValues = ["value1", "value2"]
      }, 1000)
      // If watching text or value is not reactive - the refresh will not happen at all (reusing previous components)
      setTimeout(() => {
        this.asyncValues = ["value0", "value1"]
      }, 2000)
      setTimeout(() => this.queryExampleLocked.push('tag2'), 1000)
      setTimeout(() => this.initiallyDisabled = false, 1000)
      setTimeout(() => this.simulateFetchingOfSortedValues(), 1000)
    },

    watch: {
      queryExampleLocked() {
        this.$refs.asyncSelect.$emit('dataChanged');
      }
    },

    computed: {
      sortedValues() {
        return _.sortBy(this.unsortedValues.map(value => ({id: value, text: value})), "text");
      }
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
                {id: query.term + 2, text: query.term + " copy"},
              ]
            }), 200);
        }
      },

      initialValue(element, callback) {
        if (element.val() === "initialValue") {
          setTimeout(() => callback({id: "initialValue", text: "Initial Value"}), 300)
        }
      },

      initialMultiValues(element, callback) {
        const namesMap = {
          me: "Me",
          tag1: 'Tag 1',
          tag2: 'Tag 2',
        }
        const items = element.val().split(',').map(value => ({
          id: value,
          text: namesMap[value] || value,
          locked: this.queryExampleLocked.indexOf(value) >= 0
        }))
        setTimeout(() => callback(items), 300)
      },

      simulateFetchingOfSortedValues() {
        this.unsortedValues = [];
        setTimeout(() => {
          this.unsortedValues.push.apply(this.unsortedValues, ["c"]);
        }, 1000)
        setTimeout(() => {
          this.unsortedValues.push.apply(this.unsortedValues, ["b"]);
        }, 1500)
        setTimeout(() => {
          this.unsortedValues.push.apply(this.unsortedValues, ["a"]);
        }, 2000)
      }
    }
  }
</script>

<style scoped>
  .custom-class {
    width: 300px;
  }
</style>
