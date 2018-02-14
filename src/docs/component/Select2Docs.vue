<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Single select</h3>

      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-select2 v-model="selectValue" placeholder="Select value" allow-clear
                        :disabled="initiallyDisabled">
              <va-select2-option :value="1" text="Option 1"></va-select2-option>
              <va-select2-option :value="2" text="Option 2"></va-select2-option>
            </va-select2>
            <span>{{({selectValue})}}</span>
          </p>

          <p>
            <va-select2 v-model="selectValue2" placeholder="Select value" class="custom-class">
              <va-select2-option value="value1" text="Any value"></va-select2-option>
            </va-select2>
            <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
          </p>

          <h5>Default value and options loaded asynchronously</h5>
          <p>
            <va-select2 v-model="selectInitialValue" class="custom-class">
              <va-select2-option v-for="value in asyncValues" :value="value" :key="value"
                                 :text="value"></va-select2-option>
            </va-select2>
            <button class="aui-button aui-button-link" @click="selectInitialValue = undefined">Clear value</button>
            <button class="aui-button aui-button-link" @click="selectInitialValue = 'value1'">Set</button>
            ({{selectInitialValue}})
          </p>

          <h5>Query for options</h5>
          <p>
            <va-select2 v-model="selectValueAsync" class="custom-class"
                        :query="queryValues"
                        :init-selection="initialValue"></va-select2>
            ({{selectValueAsync}})
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code1'></code></pre>
        </va-tab>

      </va-tabs>

      <h4>Custom templating</h4>
      <va-tabs>
        <va-tab name="Example">
          <va-select2 v-model="color">
          <span slot="formatResult" slot-scope="option" style="display: flex">
            <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item"></span>
            <span style="padding: 6px">{{option.data.name}}</span>
          </span>
            <span slot="formatSelection" slot-scope="option" style="display: flex">
            <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item-selected"></span>
            <span style="padding-left: 8px">{{option.data.name}}</span>
          </span>
            <va-select2-option value="blue" :data="{name: 'Blue', rgb: '#3572b0'}"></va-select2-option>
            <va-select2-option value="green" :data="{name: 'Green', rgb: '#14892c'}"></va-select2-option>
            <va-select2-option value="red" :data="{name: 'Red', rgb: '#d04437'}"></va-select2-option>
            <va-select2-option value="yellow" :data="{name: 'Yellow', rgb: '#f6c342'}"></va-select2-option>
          </va-select2>

          <form class="aui">
            <va-select2 multiple v-model="users">
            <span slot="formatResult" slot-scope="option" style="display: flex">
              <aui-avatar size="small" :src="option.data.url"></aui-avatar>
              <span style="margin: 4px 8px">{{option.data.fullname}} ({{option.value}})</span>
            </span>
              <span slot="formatSelection" slot-scope="option">
              <aui-avatar size="xsmall" :src="option.data.url"></aui-avatar>
              {{option.data.fullname}}
            </span>
              <va-select2-option value="alice"
                                 :data="{fullname: 'Alice', url:'https://randomuser.me/api/portraits/women/14.jpg'}"></va-select2-option>
              <va-select2-option value="bob"
                                 :data="{fullname: 'Bob', url:'https://randomuser.me/api/portraits/men/52.jpg'}"></va-select2-option>
            </va-select2>
          </form>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='codeCustomTemplates'></code></pre>
        </va-tab>
      </va-tabs>

      <h3>Multi select</h3>

      <va-tabs>
        <va-tab name="Example">
          <h5>With predefined set of options</h5>
          <form class="aui">
            <va-select2 multiple v-model="selectValues" class="custom-class2" placeholder="Select any value"
                        :disabled="initiallyDisabled">
              <va-select2-option :value="1" text="Value 1"></va-select2-option>
              <va-select2-option :value="2" text="Value 2"></va-select2-option>
              <va-select2-option :value="3" text="Value 3"></va-select2-option>
            </va-select2>
          </form>
          <span>{{selectValues}}</span>

          <h5>Tags mode - options are created dynamically</h5>
          <form class="aui">
            <va-select2 multiple v-model="selectTags" tags-mode sortable width="auto">
              <va-select2-option value="tag1" text="Tag 1"></va-select2-option>
              <va-select2-option value="tag2" text="Tag 2"></va-select2-option>
            </va-select2>
          </form>
          <span>{{selectTags}}</span>

          <h5>Query for options</h5>
          <form class="aui">
            <va-select2 multiple ref="asyncSelect" v-model="queryExample" :query="queryValues"
                        :init-selection="initialMultiValues" :locked="queryExampleLocked">
            </va-select2>
          </form>
          <span>{{queryExample}}</span>

          <h5>Disabled with placeholder</h5>
          <form class="aui">
            <va-select2 multiple disabled placeholder="Disabled select">
            </va-select2>
          </form>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table :name="['va-select2']" :props="[
      {name: 'allow-clear', type: 'Boolean', badges:['single'], description: 'Show clear button to remove current value.'},
      {name: 'disabled', type: 'Boolean', default: 'false', description: 'Disables the select.'},
      {name: 'dropdown-auto-width', type: 'Boolean', default: 'false', description: 'Attempts to automatically size the width of the dropdown based on content inside.'},
      {name: 'init-selection', type: 'Function', description: 'Used with query. Essentially this is an id->object mapping function.'},
      {name: 'maximum-input-length', type: 'Number', description: 'Maximum number of characters that can be entered for an input.'},
      {name: 'minimum-input-length', type: 'Number', description: 'Number of characters necessary to start a search.'},
      {name: 'minimum-results-for-search', type: 'Number', badges:['single'], description: 'The minimum number of results that must be initially populated in order to keep the search field.'},
      {name: 'multiple', type: 'Boolean', description: 'Controls single or multi select. Multi-select uses Array in v-model (:value, @input).'},
      {name: 'placeholder', type: 'String', description: 'Initial value that is selected if no other selection is made.'},
      {name: 'query', type: 'Function', description: 'Function used to query results for the search term.'},
      {name: 'sortable', type: 'Boolean', default: 'false', badges:['multiple'], description: 'Enabled drag-and-drop sorting of selected elements. Requires jquery-draggable plugin.'},
      {name: 'tags-mode', type: 'Boolean', default: 'false', badges:['multiple'], description: 'Puts Select2 into \'tagging\'mode.'},
      {name: 'value', type: 'String, Number, Array', badges:['single'], description: 'Selected value. Multiple uses Array and single String or Number values.'},
      {name: 'width', type: 'String', description: 'Controls the width style attribute of the Select2 container div.'},
    ]" :events="[
      {name:'input', description: 'Emitted whenever select value is changed.'},
    ]" :slots="[
      {name: 'default', description: 'Used to put va-select2-option elements.'}
    ]"/>

      <api-table name="va-select2-option" :props="[
      {name: 'text', type: 'String', description: 'String used to render option. It\'s also used to query when using render slots.'},
      {name: 'value', type: 'String, Number', description: 'The actual unique value used in the model.'},
      {name: 'data', type: 'Object', description: 'Extra data used by renderering slots formatSelection and formatResult.'},
    ]" :slots="[
      {name: 'formatResult', scope: 'value, data', description: 'Template used to format options in the dropdown.'},
      {name: 'formatSelection', scope: 'value, data', description: 'Template used to format selected option.'},
    ]">
      </api-table>
      <va-message type="warning">Because of Select2 limitations custom render slots render dead components. They are
        passed as a String and won't handle any Vue.js events.
      </va-message>
      <p>All of the options are delegation to native Select2 features.
        See <a href="http://select2.github.io/select2/" target="_blank">http://select2.github.io/select2/</a> for full
        reference.</p>
    </div>
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
  <va-select2 v-model="selectValue" placeholder="Select value" allow-clear :disabled="initiallyDisabled">
    <va-select2-option value="value1" text="Option 1"></va-select2-option>
    <va-select2-option value="value2" text="Option 2"></va-select2-option>
  </va-select2>
  <span>{{selectValue}}</span>
</p>

<p>
  <va-select2 v-model="selectValue2" placeholder="Select value" class="custom-class">
    <va-select2-option value="value1" text="Any value"></va-select2-option>
  </va-select2>
  <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
</p>

<h5>Default value and options loaded asynchronously</h5>
<p>
  <va-select2 v-model="selectInitialValue" class="custom-class">
    <va-select2-option v-for="value in asyncValues" :value="value" :text="value"></va-select2-option>
  </va-select2>
  <button class="aui-button aui-button-link" @click="selectInitialValue = undefined">Clear value</button>
  <button class="aui-button aui-button-link" @click="selectInitialValue = 'value1'">Set</button>
  ({{selectInitialValue}})
</p>

<h5>Query for options</h5>
<p>
  <va-select2 v-model="selectValueAsync" class="custom-class"
                      :query="queryValues"
                      :init-selection="initialValue"></va-select2>
  ({{selectValueAsync}})
</p>
`,

        codeCustomTemplates: `<va-select2 v-model="color">
  <span slot="formatResult" slot-scope="option" style="display: flex">
    <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item"></span>
    <span style="padding: 6px">{{option.data.name}}</span>
  </span>
  <span slot="formatSelection" slot-scope="option" style="display: flex">
    <span :style="{backgroundColor: option.data.rgb}" class="color-picker-item-selected"></span>
    <span style="padding-left: 8px">{{option.data.name}}</span>
  </span>
  <va-select2-option value="blue" :data="{name: 'Blue', rgb: '#3572b0'}"></va-select2-option>
  <va-select2-option value="green" :data="{name: 'Green', rgb: '#14892c'}"></va-select2-option>
  <va-select2-option value="red" :data="{name: 'Red', rgb: '#d04437'}"></va-select2-option>
  <va-select2-option value="yellow" :data="{name: 'Yellow', rgb: '#f6c342'}"></va-select2-option>
</va-select2>

<form class="aui">
  <va-select2 multiple v-model="users">
    <span slot="formatResult" slot-scope="option" style="display: flex">
      <aui-avatar size="small" :src="option.data.url"></aui-avatar>
      <span style="margin: 4px 8px">{{option.data.fullname}} ({{option.value}})</span>
    </span>
    <span slot="formatSelection" slot-scope="option">
      <aui-avatar size="xsmall" :src="option.data.url"></aui-avatar>
      {{option.data.fullname}}
    </span>
    <va-select2-option value="alice"
                        :data="{fullname: 'Alice', url:'https://randomuser.me/api/portraits/women/14.jpg'}"></va-select2-option>
    <va-select2-option value="bob"
                        :data="{fullname: 'Bob', url:'https://randomuser.me/api/portraits/men/52.jpg'}"></va-select2-option>
  </va-select2>
</form>`,
        code2: `<h5>With predefined set of options</h5>
<form class="aui">
  <va-select2 multiple v-model="selectValues" class="custom-class2" placeholder="Select any value" :disabled="initiallyDisabled">
    <va-select2-option value="value1" text="Value 1"></va-select2-option>
    <va-select2-option value="value2" text="Value 2"></va-select2-option>
    <va-select2-option value="value3" text="Value 3"></va-select2-option>
  </va-select2>
</form>
<span>{{selectValues}}</span>

<h5>Tags mode - options are created dynamically</h5>
<form class="aui">
  <va-select2 multiple v-model="selectTags" tags-mode sortable width="auto">
    <va-select2-option value="tag1" text="Tag 1"></va-select2-option>
    <va-select2-option value="tag2" text="Tag 2"></va-select2-option>
  </va-select2>
</form>
<span>{{selectTags}}</span>

<h5>Query for options</h5>
<form class="aui">
  <va-select2 multiple ref="asyncSelect" v-model="queryExample" :query="queryValues"
                     :init-selection="initialMultiValues" :locked="queryExampleLocked">
  </va-select2>
</form>
<span>{{queryExample}}</span>

<h5>Disabled with placeholder</h5>
<form class="aui">
  <va-select2 multiple disabled placeholder="Disabled select">
  </va-select2>
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
