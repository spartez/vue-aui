<template>
  <div>
    <h3>Basic usage</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <p>
          <a href="#" v-aui-tooltip="`This is a simple tooltip`">tooltip</a>
        </p>
        <p>
          <a href="#" v-aui-tooltip.e="`left`">left</a>
          <a href="#" v-aui-tooltip.s="`top`">top</a>
          <a href="#" v-aui-tooltip.n="`bottom`">bottom</a>
          <a href="#" v-aui-tooltip.w="`right`">right</a>
        </p>
        <p>
          <a href="#" v-aui-tooltip.html="`<b>Bold</b>`">I'm bold!</a>
        </p>
        <p>
          <a href="#" v-aui-tooltip="{title: `Current value is ${value}`, delayIn: 50}">I'm changing!</a>
        </p>
      </aui-tab>

      <aui-tab name="Code">
        <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
      </aui-tab>
    </aui-tabs>

    <h3>Using tipsy options</h3>

    <aui-tabs>
      <aui-tab name="Example">
        <p>Any options from original <a href="https://github.com/jaz303/tipsy/blob/master/docs/src/index.html.erb">
          Tipsy documentation</a> can be passed using object notation.
        </p>
        <p>
          <a href="#" v-aui-tooltip="{title: 'Wow', delayIn: 50}">I'm soo fast!</a>
          <br>
          <a href="#" v-aui-tooltip="{title: 'Text', delayIn: 0, fade: true}">I'm smooth!</a>
          <br>
          <a href="#" v-aui-tooltip="{title: 'Text', delayIn: 100, fade: true, offset: 50, opacity: 0.7}">Custom</a>
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
    mounted() {
    },
    data() {
      return {
        value: 0,
        code: `<a href="#" v-aui-tooltip="\`This is a simple tooltip\`">tooltip</a>

<a href="#" v-aui-tooltip.e="\`left\`">left</a>
<a href="#" v-aui-tooltip.s="\`top\`">top</a>
<a href="#" v-aui-tooltip.n="\`bottom\`">bottom</a>
<a href="#" v-aui-tooltip.w="\`right\`">right</a>

<a href="#" v-aui-tooltip.html="\`<b>Bold</b>\`">I'm bold!</a>`,

        code2: `<a href="#" v-aui-tooltip="{title: 'Wow', delayIn: 50}">I'm soo fast!</a>
<a href="#" v-aui-tooltip="{title: 'Text', delayIn: 0, fade: true}">I'm smooth!</a>
<a href="#" v-aui-tooltip="{title: 'Text', delayIn: 100, fade: true, offset: 50, opacity: 0.7}">Custom</a>`
      }
    },
    mounted() {
      setInterval(() => this.value++, 2000);
    }
  }
</script>
