<template>
  <div class="aui-group">
    <div class="aui-item">
      <h3>Basic usage</h3>
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-icon>wait</va-icon>
            <va-icon>add</va-icon>
            <va-icon>bitbucket</va-icon>
          </p>
          <p>
            <va-icon size="large">like</va-icon>
            <va-icon size="large">user</va-icon>
            <va-icon size="large">approve</va-icon>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code'></code></pre>
        </va-tab>
      </va-tabs>
      <h3>Custom colors</h3>
      <va-tabs>
        <va-tab name="Example">
          <p>
            <va-icon color="orange" size="large">like</va-icon>
            <va-icon color="green" size="large">add</va-icon>
            <va-icon color="red" size="large">bitbucket</va-icon>
            <va-icon color="rgb(128, 0, 128)" size="large">vid-play</va-icon>
            <va-icon color="rgba(255, 0, 255, .5)" size="large">pause</va-icon>
            <va-icon color="hsl(240, 100%, 27%)" size="large">star</va-icon>
            <va-icon color="#00e5ff" size="large">space-personal</va-icon>
          </p>
        </va-tab>
        <va-tab name="Code">
          <pre v-highlightjs><code class="xml" v-text='code2'></code></pre>
        </va-tab>
      </va-tabs>
    </div>

    <div class="aui-item">
      <api-table name="va-icon" :props="[
      {name: 'size', type: 'String', default: 'medium', description: 'Sets proper size aligned with AUI guidelines.'},
      {name: 'color', type: 'String', default: '', description: 'Sets a custom color. Accepts all color values available.'},
    ]">
      </api-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        code: `<va-icon>wait</va-icon>
<va-icon>add</va-icon>
<va-icon>bitbucket</va-icon>

<va-icon size="large">like</va-icon>
<va-icon size="large">user</va-icon>
<va-icon size="large">approve</va-icon>`,
        code2: `<va-icon color="orange" size="large">like</va-icon>
<va-icon color="green" size="large">add</va-icon>
<va-icon color="red" size="large">bitbucket</va-icon>
<va-icon color="rgb(128, 0, 128)" size="large">vid-play</va-icon>
<va-icon color="rgba(255, 0, 255, .5)" size="large">pause</va-icon>
<va-icon color="hsl(240, 100%, 27%)" size="large">star</va-icon>
<va-icon color="#00e5ff" size="large">space-personal</va-icon>`,
      }
    }
  }
</script>
