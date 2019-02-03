<template>
  <div class="aui-group">
    <div class="aui-item">
      <va-tabs>
        <va-tab name="Example">
          <va-tabs :selected.sync="selectedTab">
            <va-tab name="Tab 1" id="tab1">
              <h3>Tab 1</h3>
              <p>This is content of tab 1</p>
              <br/>
              <va-button v-if="!tab2Visible" @click="tab2Visible = true">Show Dynamic Tab</va-button>
              <va-button v-if="tab2Visible" @click="selectedTab = 'tab2'">Go to tab 2</va-button>
            </va-tab>
            <va-tab
              ref="tab2" id="tab2" v-if="tab2Visible" :name="`${tab2Name} <aui-badge>${badgeValuesCount}</aui-badge>`"
            >
              <h3>Dynamic Tab</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br/>

              <form class="aui">
                <div class="field-group">
                  <label>Change Tab Name</label>
                  <input v-model="tab2Name" class="text" type="text"/>
                  <div class="description">Update name of tab</div>
                </div>
                <div class="field-group">
                  <label>Change Tab Badge</label>
                  <va-select2 multiple v-model="badgeValues" :tags-mode="true"/>
                  <div class="description">Change values to update badge of tab's title</div>
                </div>
              </form>

              <br/>
              <va-button @click="tab2Visible = false">Hide this tab</va-button>
            </va-tab>
          </va-tabs>
        </va-tab>

        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table
        name="va-tabs"
        :slots="[
          { name: 'default', description: 'Container for va-tab elements.' }
        ]"
        :methods="[
          {
            name: 'selectTab',
            params: 'tabId',
            description: 'Open a tab using its unique id'
          }
        ]"
      >
      </api-table>
      <api-table
        name="va-tab"
        :props="[
          { name: 'name', type: 'String', description: 'Tab title.' },
          {
            name: 'id',
            type: 'String',
            description:
              'Unique id of the tab. A unique id is automatically set if not provided.'
          }
        ]"
        :slots="[{ name: 'default', description: 'Tab contents.' }]"
      >
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
            <va-tabs :selected.sync="selectedTab">
            <va-tab name="Tab 1" id="tab1">
              <h3>Tab 1</h3>
              <p>This is content of tab 1</p>
              <br/>
              <va-button v-if="!tab2Visible" @click="tab2Visible = true">Show Dynamic Tab</va-button>
              <va-button v-if="tab2Visible" @click="selectedTab = 'tab2'">Go to tab 2</va-button>
            </va-tab>
            <va-tab
              ref="tab2" id="tab2" v-if="tab2Visible" :name="\`\${tab2Name} <aui-badge>\${badgeValuesCount}</aui-badge>\`"
            >
              <h3>Dynamic Tab</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br/>

              <form class="aui">
                <div class="field-group">
                  <label>Change Tab Name</label>
                  <input v-model="tab2Name" class="text" type="text"/>
                  <div class="description">Update name of tab</div>
                </div>
                <div class="field-group">
                  <label>Change Tab Badge</label>
                  <va-select2 multiple v-model="badgeValues" :tags-mode="true"/>
                  <div class="description">Change values to update badge of tab's title</div>
                </div>
              </form>

              <br/>
              <va-button @click="tab2Visible = false">Hide this tab</va-button>
            </va-tab>
          </va-tabs>`,
        tab2Visible: false,
        tab2Name: "Dynamic Tab",
        selectedTab: undefined,
        badgeValues: ["val1", "val2", "val3"]
      };
    },

    computed: {
      badgeValuesCount() {
        return this.badgeValues.length;
      }
    }
  };
</script>
