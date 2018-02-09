<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Basic usage</h3>

      <va-tabs>
        <va-tab name="Example">
          <p>
            <a href="#" v-va-tooltip="`This is a simple tooltip`">tooltip</a>
          </p>
          <p>
            <a href="#" v-va-tooltip.e="`left`">left</a>
            <a href="#" v-va-tooltip.s="`top`">top</a>
            <a href="#" v-va-tooltip.n="`bottom`">bottom</a>
            <a href="#" v-va-tooltip.w="`right`">right</a>
          </p>
          <p>
            <a href="#" v-va-tooltip.html="`<b>Bold</b>`">I'm bold!</a>
          </p>
          <p>
            <a href="#" v-va-tooltip="{title: `Current value is ${value}`, delayIn: 50}">I'm changing!</a>
          </p>
        </va-tab>

        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>

      <h3>Using tipsy options</h3>

      <va-tabs>
        <va-tab name="Example">
          <p>Any options from original <a href="https://github.com/jaz303/tipsy/blob/master/docs/src/index.html.erb">
            Tipsy documentation</a> can be passed using object notation.
          </p>
          <p>
            <a href="#" v-va-tooltip="{title: 'Wow', delayIn: 50}">I'm soo fast!</a>
            <br>
            <a href="#" v-va-tooltip="{title: 'Text', delayIn: 0, fade: true}">I'm smooth!</a>
            <br>
            <a href="#" v-va-tooltip="{title: 'Text', delayIn: 100, fade: true, offset: 50, opacity: 0.7}">Custom</a>
          </p>
        </va-tab>

        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table directive-name="va-tooltip" :directive-value="{type: 'String, Object', description: 'String sets the tooltip text and Object represents Tipsy options object.'}" :modifiers="[
      {name: 'n', description: 'Sets tooltip direction to north.'},
      {name: 'e', description: 'Sets tooltip direction to east.'},
      {name: 's', description: 'Sets tooltip direction to south.'},
      {name: 'w', description: 'Sets tooltip direction to west.'},
      {name: 'html', type: 'Boolean', default: 'false', description: 'Disable HTML escaping allowing to pass HTML as tooltip content.'},
    ]" >
      </api-table>

      AUI tooltip uses Tipsy under the hood. See <a target="_blank"
      href="https://github.com/atlassian/tipsy/blob/master/docs/src/index.html.erb">https://github.com/atlassian/tipsy/blob/master/docs/src/index.html.erb</a> for full Tipsy reference.
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
    },
    data() {
      return {
        value: 0,
        code: `<a href="#" v-va-tooltip="\`This is a simple tooltip\`">tooltip</a>

<a href="#" v-va-tooltip.e="\`left\`">left</a>
<a href="#" v-va-tooltip.s="\`top\`">top</a>
<a href="#" v-va-tooltip.n="\`bottom\`">bottom</a>
<a href="#" v-va-tooltip.w="\`right\`">right</a>

<a href="#" v-va-tooltip.html="\`<b>Bold</b>\`">I'm bold!</a>`,

        code2: `<a href="#" v-va-tooltip="{title: 'Wow', delayIn: 50}">I'm soo fast!</a>
<a href="#" v-va-tooltip="{title: 'Text', delayIn: 0, fade: true}">I'm smooth!</a>
<a href="#" v-va-tooltip="{title: 'Text', delayIn: 100, fade: true, offset: 50, opacity: 0.7}">Custom</a>`
      }
    },
    mounted() {
      setInterval(() => this.value++, 2000);
    }
  }
</script>
