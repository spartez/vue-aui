<template>
  <div class="api-table">
    <aui-lozenge v-for="name in namesArray" class="api-element" type="current" :key="name">&lt;{{name}}&gt;
    </aui-lozenge>
    <aui-lozenge v-if="directiveName" class="api-element" type="current">v-{{directiveName}}</aui-lozenge>

    <template v-if="props && props.length">
      <h4>Props</h4>
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
            <aui-lozenge class="name-lozenge" v-if="prop.isSyncable" type="complete">.sync</aui-lozenge>
          </td>
          <td headers="type"><code>{{prop.type}}</code></td>
          <td headers="default"><code>{{prop.default || '-'}}</code></td>
          <td headers="description">{{prop.description}}</td>
        </tr>
        </tbody>
      </table>
    </template>

    <template v-if="events && events.length">
      <h4>Events</h4>
      <table class="aui">
        <thead>
        <tr>
          <th id="event-name">Name</th>
          <th id="event-description">Description</th>
        </tr>
        </thead>
        <tbody>
        <!-- TODO add paylod description to events -->
        <tr v-for="prop in events">
          <td headers="event-name">
            <aui-lozenge class="name-lozenge" subtle type="current">{{prop.name}}</aui-lozenge>
          </td>
          <td headers="event-description">
            <aui-lozenge v-if="prop.isDeprecated" type="error">Deprecated</aui-lozenge>
            {{prop.description}}
          </td>
        </tr>
        </tbody>
      </table>
    </template>

    <template v-if="slots && slots.length">
      <h4>Slots</h4>
      <table class="aui">
        <thead>
        <tr>
          <th id="slot-name">Name</th>
          <th id="slot-scope-params">Scope</th>
          <th id="slot-description">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="slot in slots">
          <td headers="slot-name">
            <aui-lozenge class="name-lozenge" subtle type="current">{{slot.name}}</aui-lozenge>
          </td>
          <td headers="slot-scope-params"><code>{{slot.scope || '-'}}</code></td>
          <td headers="slot-description">{{slot.description}}</td>
        </tr>
        </tbody>
      </table>
    </template>

    <template v-if="directiveValue">
      <h4>Directive value</h4>
      <table class="aui">
        <thead>
        <tr>
          <th id="directive-value-type">Type</th>
          <th id="directive-value-description">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td headers="directive-value-type">
            <code>{{directiveValue.type}}</code>
          </td>
          <td headers="directive-value-description">{{directiveValue.description}}</td>
        </tr>
        </tbody>
      </table>
    </template>

    <template v-if="modifiers && modifiers.length">
      <h4>Modifiers</h4>
      <table class="aui">
        <thead>
        <tr>
          <th id="modifier-name">Name</th>
          <th id="modifier-description">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="modifier in modifiers">
          <td headers="modifier-name">
            <aui-lozenge class="name-lozenge" subtle type="current">{{modifier.name}}</aui-lozenge>
          </td>
          <td headers="modifier-description">{{modifier.description}}</td>
        </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      directiveName: String,
      directiveValue: Object,
      events: Array,
      isDeprecated: Boolean,
      isSyncable: Boolean,
      name: {
        type: [String, Array],
      },
      modifiers: Array,
      props: Array,
      slots: Array,
    },
    computed: {
      namesArray() {
        if (typeof this.name === 'string') {
          return [this.name]
        }
        return this.name
      }
    }
  }
</script>

<style scoped>
  .name-lozenge {
    font-size: 13px;
    text-transform: none;
    white-space: nowrap;
  }

  .api-element {
    font-size: 16px;
    margin-right: 10px;
    text-transform: none;
  }

  .api-table {
    margin-bottom: 20px;
  }
</style>
