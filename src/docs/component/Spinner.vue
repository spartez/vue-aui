<template>
  <aui-tabs>
    <aui-tab name="Example">
      <h3>Standard spinner similar to aui-wait</h3>
      <aui-spinner></aui-spinner>
      <aui-spinner :spin="isSpinning"></aui-spinner>
      <h3>Various spinners</h3>
      <p>
        <aui-spinner :radius="40" :length="30" :width="16"></aui-spinner>
        <aui-spinner :radius="30" :width="8" :length="15"></aui-spinner>
        <aui-spinner :radius="15" :width="4" :length="8"></aui-spinner>
        <aui-spinner :radius="8" :length="6" :width="2"></aui-spinner>
      </p>
    </aui-tab>
    <aui-tab name="Code">
      <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
    </aui-tab>
  </aui-tabs>
</template>

<script>
  export default {
    data() {
      return {
        code: `<aui-spinner></aui-spinner>
<aui-spinner :spin="isSpinning"></aui-spinner>

<aui-spinner :radius="40" :length="30" :width="16"></aui-spinner>
<aui-spinner :radius="30" :width="8" :length="15"></aui-spinner>
<aui-spinner :radius="15" :width="4" :length="8"></aui-spinner>
<aui-spinner :radius="8" :length="6" :width="2"></aui-spinner>`,

        isSpinning: true
      }
    },

    mounted() {
      setInterval(() => this.isSpinning = !this.isSpinning, 1000)
    }
  }
</script>
