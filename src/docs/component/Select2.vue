<template>
  <div>
    <h3>Single select</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <aui-select2-single v-model="selectValue" placeholder="Select value" allow-clear
                              :disabled="initiallyDisabled">
            <aui-select2-option :value="1" text="Option 1"></aui-select2-option>
            <aui-select2-option :value="2" text="Option 2"></aui-select2-option>
          </aui-select2-single>
          <span>{{({selectValue})}}</span>
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
            <aui-select2-option v-for="value in asyncValues" :value="value" :key="value" :text="value"></aui-select2-option>
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
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code1'></code></pre>
      </aui-tab>

    </aui-tabs>

    <h4>Custom templating</h4>
    <aui-tabs>
      <aui-tab name="Example">
        <aui-select2-single v-model="color">
          <span slot="formatResult" slot-scope="option" style="display: flex">
            <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item"></span>
            <span style="padding: 6px">{{option.data.name}}</span>
          </span>
          <span slot="formatSelection" slot-scope="option" style="display: flex">
            <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item-selected"></span>
            <span style="padding-left: 8px">{{option.data.name}}</span>
          </span>
          <aui-select2-option value="blue" :data="{name: 'Blue', rgb: '#3572b0'}"></aui-select2-option>
          <aui-select2-option value="green" :data="{name: 'Green', rgb: '#14892c'}"></aui-select2-option>
          <aui-select2-option value="red" :data="{name: 'Red', rgb: '#d04437'}"></aui-select2-option>
          <aui-select2-option value="yellow" :data="{name: 'Yellow', rgb: '#f6c342'}"></aui-select2-option>
        </aui-select2-single>

        <form class="aui">
          <aui-select2-multi v-model="users">
            <span slot="formatResult" slot-scope="option" style="display: flex">
              <aui-avatar size="small" :src="option.data.url"></aui-avatar>
              <span style="margin: 4px 8px">{{option.data.fullname}} ({{option.value}})</span>
            </span>
            <span slot="formatSelection" slot-scope="option">
              <aui-avatar size="xsmall" :src="option.data.url"></aui-avatar>
              {{option.data.fullname}}
            </span>
            <aui-select2-option value="alice"
                                :data="{fullname: 'Alice', url:'https://randomuser.me/api/portraits/women/14.jpg'}"></aui-select2-option>
            <aui-select2-option value="bob"
                                :data="{fullname: 'Bob', url:'https://randomuser.me/api/portraits/men/52.jpg'}"></aui-select2-option>
          </aui-select2-multi>
        </form>
      </aui-tab>
      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='codeCustomTemplates'></code></pre>
      </aui-tab>
    </aui-tabs>

    <h3>Multi select</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <h5>With predefined set of options</h5>
        <form class="aui">
          <aui-select2-multi v-model="selectValues" class="custom-class2" placeholder="Select any value"
                             :disabled="initiallyDisabled">
            <aui-select2-option :value="1" text="Value 1"></aui-select2-option>
            <aui-select2-option :value="2" text="Value 2"></aui-select2-option>
            <aui-select2-option :value="3" text="Value 3"></aui-select2-option>
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
        selectValue: 1,
        selectInitialValue: 'value1',
        asyncValues: [],
        selectValue2: undefined,
        selectValueAsync: "initialValue",
        selectValues: [1],
        selectTags: ["tag1"],
        queryExample: ["tag1", "tag2"],
        queryExampleLocked: ["tag1"],
        initiallyDisabled: true,
        users: ['alice'],
        color: 'red',

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

        codeCustomTemplates: `<aui-select2-single v-model="color">
  <span slot="formatResult" slot-scope="option" style="display: flex">
    <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item"></span>
    <span style="padding: 6px">{{option.data.name}}</span>
  </span>
  <span slot="formatSelection" slot-scope="option" style="display: flex">
    <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item-selected"></span>
    <span style="padding-left: 8px">{{option.data.name}}</span>
  </span>
  <aui-select2-option value="blue" :data="{name: 'Blue', rgb: '#3572b0'}"></aui-select2-option>
  <aui-select2-option value="green" :data="{name: 'Green', rgb: '#14892c'}"></aui-select2-option>
  <aui-select2-option value="red" :data="{name: 'Red', rgb: '#d04437'}"></aui-select2-option>
  <aui-select2-option value="yellow" :data="{name: 'Yellow', rgb: '#f6c342'}"></aui-select2-option>
</aui-select2-single>

<form class="aui">
  <aui-select2-multi v-model="users">
    <span slot="formatResult" slot-scope="option" style="display: flex">
      <aui-avatar size="small" :src="option.data.url"></aui-avatar>
      <span style="margin: 4px 8px">{{option.data.fullname}} ({{option.value}})</span>
    </span>
    <span slot="formatSelection" slot-scope="option">
      <aui-avatar size="xsmall" :src="option.data.url"></aui-avatar>
      {{option.data.fullname}}
    </span>
    <aui-select2-option value="alice"
                        :data="{fullname: 'Alice', url:'https://randomuser.me/api/portraits/women/14.jpg'}"></aui-select2-option>
    <aui-select2-option value="bob"
                        :data="{fullname: 'Bob', url:'https://randomuser.me/api/portraits/men/52.jpg'}"></aui-select2-option>
  </aui-select2-multi>
</form>`,
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
    },

    watch: {
      queryExampleLocked() {
        this.$refs.asyncSelect.$emit('dataChanged');
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
      }
    }
  }
</script>

<style scoped>
  .custom-class {
    width: 300px;
  }

  .color-picker-item {
    border-radius: 3px;
    width: 24px;
    height: 24px;
    margin: 4px 0;
  }

  .color-picker-item-selected {
    border-radius: 2px;
    width: 16px;
    height: 16px;
    margin: 2px 0;
  }
</style>
