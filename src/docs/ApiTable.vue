<template>
  <div>
    <h3>API</h3>
    <aui-tabs>
      <aui-tab v-if="props && props.length" name="Props">
        <table class="aui">
          <thead>
          <tr>
            <th id="name">Name</th>
            <th id="type">Type</th>
            <th id="default">Default</th>
            <th id="description">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="prop in props">
            <td headers="name">
              <aui-lozenge class="name-lozenge" subtle type="current">{{prop.name}}</aui-lozenge>
            </td>
            <td headers="type"><code>{{prop.type}}</code></td>
            <td headers="default"><code>{{prop.default}}</code></td>
            <td headers="description">{{prop.description}}</td>
          </tr>
          </tbody>
        </table>
      </aui-tab>
      <aui-tab v-if="events && events.length" name="Events">
        <table class="aui">
          <thead>
          <tr>
            <th id="event-name">Name</th>
            <th id="event-description">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="prop in events">
            <td headers="event-name">
              <aui-lozenge class="name-lozenge" subtle type="current">{{prop.name}}</aui-lozenge>
            </td>
            <td headers="event-description">{{prop.description}}</td>
          </tr>
          </tbody>
        </table>
      </aui-tab>
    </aui-tabs>
  </div>
</template>

<script>
  export default {
    props: {
      props: Array,
      events: Array,
    }
  }
</script>

<style scoped>
  h3 {
    margin-top: 20px
  }

  .name-lozenge {
    font-size: 13px;
    text-transform: none;
  }
</style>
