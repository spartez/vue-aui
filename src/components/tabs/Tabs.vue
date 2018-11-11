<template>
  <div>
    <div class="aui-tabs horizontal-tabs">
      <ul class="tabs-menu">
        <li ref="item" class="menu-item" v-for="tab in tabs">
          <a :href="'#' + tab.componentOptions.propsData.id">{{tab.componentOptions.propsData.name}}</a>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {createUniqueId} from '../../utils'

  export default {
    data() {
      return {
        tabs: []
      }
    },
    beforeMount() {
      this.updateTabs()
    },
    mounted() {
      const link = AJS.$(this.$el).find('.menu-item a')[0];
      const $link = AJS.$(link);
      AJS.tabs.change($link)
      AJS.tabs.setup();
    },
    updated(){
      let newTabs = this.getTabs()
      if (newTabs.length != this.tabs.length){
        this.updateTabs()
      }
    },
    methods: {
      getTabs() {
        let tabs = this.$slots.default.filter(slot => slot.componentOptions
          && (slot.componentOptions.tag === "va-tab" || slot.componentOptions.tag === "aui-tab"));
        return tabs
      },
      updateTabs(){
        let tabs = this.getTabs()
        this.tabs = tabs
      }
    }
  }
</script>
