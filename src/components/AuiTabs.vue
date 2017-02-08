<template>
  <div>
    <div class="aui-tabs horizontal-tabs">
      <ul class="tabs-menu">
        <li ref="item" class="menu-item" v-for="tab in tabs">
          <a :href="'#' + tab.componentOptions.propsData.id">{{tab.data.attrs.name}}</a>
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
        return this.$slots.default.filter(slot => slot.componentOptions && slot.componentOptions.tag === "aui-tab")
      }
    }
  }
</script>
