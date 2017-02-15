<template>
  <div>
    <div class="aui-tabs horizontal-tabs">
      <ul class="tabs-menu">
        <li ref="item" class="menu-item" v-for="tab in tabs">
          <a :href="'#' + tab.componentOptions.propsData.tabId">{{tab.data.attrs.name}}</a>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      const link = AJS.$(this.$el).find('.menu-item a')[0];
      const $link = AJS.$(link);
      AJS.tabs.change($link)
      AJS.tabs.setup();
    },

    computed: {
      tabs(){
        const tabs = this.$slots.default.filter(slot => slot.componentOptions && slot.componentOptions.tag === "aui-tab");
        for (let obj of tabs) {
          if (!obj.tab_id) {
            obj.tab_id = Math.random().toString().substring(2)
            obj.componentOptions.propsData.tabId = obj.tab_id
          }
        }
        return tabs
      }
    }
  }
</script>
