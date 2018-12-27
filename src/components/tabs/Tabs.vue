<template>
  <div>
    <div class="aui-tabs horizontal-tabs">
      <ul class="tabs-menu">
        <li v-for="tab in tabs" :key="tab.id" class="menu-item">
          <a
            :ref="`tab_link_${tab.id}`"
            :href="'#' + tab.id"
            v-html="tab.name"
          ></a>
        </li>
      </ul>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: []
    };
  },
  mounted() {
    this.updateTabs();
    AJS.tabs.setup();
  },
  updated() {
    console.log("tabs updated");
    this.updateTabs();
  },
  methods: {
    selectDefaultTab() {
      if (this.tabs.length) {
        this.selectTab(this.tabs[0].id);
      }
    },
    hasActiveTab() {
      let activeTab = AJS.$(".menu-item.active-tab");
      return activeTab.length && activeTab.is(":visible");
    },
    selectTab(id) {
      console.log("ID", id);
      this.$nextTick(() => {
        const tabLinks = this.$refs[`tab_link_${id}`];
        console.log("TABLINKS", tabLinks);
        if (tabLinks && tabLinks.length) {
          let $tabLink = AJS.$(tabLinks[0]);
          AJS.tabs.change($tabLink);
        }
      });
    },
    getTabs() {
      return this.$slots.default
        .filter(
          vNode =>
            vNode.componentInstance &&
            (vNode.componentOptions.tag === "va-tab" ||
              vNode.componentOptions.tag === "aui-tab")
        )
        .map(vNode => vNode.componentInstance);
    },
    tabsChanged(newTabs) {
      return newTabs.length !== this.tabs.length;
    },
    updateTabs() {
      let newTabs = this.getTabs();
      if (this.tabsChanged(newTabs)) {
        this.tabs = newTabs;
        if (!this.hasActiveTab()) {
          this.selectDefaultTab();
        }
      }
    }
  }
};
</script>
