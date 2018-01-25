<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Opening on click</h3>
      <aui-tabs>
        <aui-tab name="Example">
          <va-inline-dialog responds-to="toggle">
            <a slot="trigger">Click me</a>
            <template slot="dialog">
              Lorem ipsum.
            </template>
          </va-inline-dialog>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code1'></code></pre>
        </aui-tab>
      </aui-tabs>
      <h3>Opening on hover</h3>
      <aui-tabs>
        <aui-tab name="Example">
          <va-inline-dialog responds-to="hover">
            <a slot="trigger">Hover me</a>
            <template slot="dialog">
              Lorem ipsum.
            </template>
          </va-inline-dialog>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </aui-tab>
      </aui-tabs>
      <h3>Opening with prop</h3>
      <aui-tabs>
        <aui-tab name="Example">
          <va-inline-dialog responds-to="none" :open="isOpen">
            <span slot="trigger">Nothing happens here</span>
            <template slot="dialog">
              Lorem ipsum.
            </template>
          </va-inline-dialog>
          <p>
            <a href @click.prevent="isOpen = !isOpen">Toggle prop</a>
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code3'></code></pre>
        </aui-tab>
      </aui-tabs>
      <h3>Alignment</h3>
      <aui-tabs>
        <aui-tab name="Example">
          <p>
            <va-inline-dialog responds-to="toggle" alignment="top center">
              <a slot="trigger">Top center</a>
              <template slot="dialog">
                Lorem ipsum.
              </template>
            </va-inline-dialog>
          </p>
          <p>
            <va-inline-dialog responds-to="toggle" alignment="bottom left">
              <a slot="trigger">Bottom left</a>
              <template slot="dialog">
                Lorem ipsum.
              </template>
            </va-inline-dialog>
          </p>
          <p>
            <va-inline-dialog responds-to="toggle" alignment="right middle">
              <a slot="trigger">Right middle</a>
              <template slot="dialog">
                Lorem ipsum.
              </template>
            </va-inline-dialog>
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code4'></code></pre>
        </aui-tab>
      </aui-tabs>
      <h3>Events</h3>
      <aui-tabs>
        <aui-tab name="Example">
          <p>
            <va-inline-dialog responds-to="toggle" alignment="top center"
                              @aui-show="state = 'Dialog is visible'" @aui-hide="state = 'Dialog is hidden'">
              <a slot="trigger">Click me</a>
              <template slot="dialog">
                Lorem ipsum.
              </template>
            </va-inline-dialog>
          </p>
          <p>
            {{ state }}
          </p>
        </aui-tab>
        <aui-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code5'></code></pre>
        </aui-tab>
      </aui-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-inline-dialog" :props="[
      {name: 'open', type: 'Boolean', default: 'false', description: 'Allows to control if the '},
      {name: 'persistent', type: 'Boolean', default: 'false', description: 'Enforced open state regardless of the interations.'},
      {name: 'alignment', type: 'String', default: 'right middle', description: 'Sets dialog direction. E.g. \'top\', \'bottom left\' etc.'},
      {name: 'responds-to', type: 'String', default: 'toggle', description: 'Sets interaction mode. Options: toggle, hover'},
    ]" :events="[
      {name:'aui-hide', description: 'Emitted when dialog is closed.'},
      {name:'aui-show', description: 'Emitted when dialog is opened.'},
    ]" :slots="[
      {name: 'trigger', description: 'Renders always-visible element that triggers the inline dialog.'},
      {name: 'dialog', description: 'Dialog contents.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  import {stripIndent} from 'common-tags'

  export default {
    data() {
      return {
        isOpen: false,
        code1: stripIndent`
        <va-inline-dialog responds-to="toggle">
          <a slot="trigger">Click me</a>
          <template slot="dialog">
            Lorem ipsum.
          </template>
        </va-inline-dialog>`,
        code2: stripIndent`
        <va-inline-dialog responds-to="hover">
          <a slot="trigger">Hover me</a>
          <template slot="dialog">
            Lorem ipsum.
          </template>
        </va-inline-dialog>`,
        code3: stripIndent`
        <va-inline-dialog responds-to="none" :open="isOpen">
          <span slot="trigger">Nothing happens here</span>
          <template slot="dialog">
            Lorem ipsum.
          </template>
        </va-inline-dialog>
        <p>
          <a href @click.prevent="isOpen = !isOpen">Toggle prop</a>
        </p>`,
        code4: stripIndent`
        <va-inline-dialog responds-to="toggle" alignment="top center">
          <a slot="trigger">Top center</a>
          <template slot="dialog">
            Lorem ipsum.
          </template>
        </va-inline-dialog>
        <va-inline-dialog responds-to="toggle" alignment="bottom left">
          <a slot="trigger">Bottom left</a>
          <template slot="dialog">
            Lorem ipsum.
          </template>
        </va-inline-dialog>
        <va-inline-dialog responds-to="toggle" alignment="right middle">
          <a slot="trigger">Right middle</a>
          <template slot="dialog">
            Lorem ipsum.
          </template>
        </va-inline-dialog>`,
        code5: stripIndent`
        <va-inline-dialog responds-to="toggle" alignment="top center" @aui-show="state = 'Dialog is visible'" @aui-hide="state = 'Dialog is hidden'">
          <a slot="trigger">Click me</a>
          <template slot="dialog">
            Lorem ipsum.
          </template>
        </va-inline-dialog>
        <p>
          {{ state }}
        </p>`,
        state: 'Dialog is hidden'
      }
    }
  }
</script>
