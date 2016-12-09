<template>
  <div>
    <h2>Toggle button</h2>

    <h3>Examples</h3>
    <p>
      <aui-toggle-button v-model="toggle1"></aui-toggle-button>
      <span>{{toggle1}}</span>
    </p>
    <p>
      <aui-toggle-button v-model="toggle2" id="example-toggle" label="Switch me" tooltip-on="On"
                         tooltip-off="Off"></aui-toggle-button>
    </p>
    <h3>Usage</h3>
    <p>
      <iframe height='265' scrolling='no' title='vue-aui demo'
              src='//codepen.io/damienix/embed/WoyPyq/?height=265&theme-id=light&default-tab=html,result&embed-version=2'
              frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a
        href='http://codepen.io/damienix/pen/WoyPyq/'>vue-aui demo</a> by Damian Skrodzki (<a
        href='http://codepen.io/damienix'>@damienix</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toggle1: true,
        toggle2: false
      }
    }
  }
</script>
