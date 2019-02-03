<template>
  <div>
    <div class="aui-tabs horizontal-tabs">
      <ul class="tabs-menu">
        <li v-for="tab in tabs" :key="tab.id" class="menu-item" @click="selectedTabId = tab.id">
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
    props: {
      selected: {
        type: String
      }
    },

    data() {
      return {
        tabs: [],
        selectedTabId: undefined
      };
    },

    watch: {
      selected: {
        immediate: true,
        handler(tabId) {
          this.selectedTabId = tabId || this.selectedTabId;
        }
      },
      selectedTabId: {
        immediate: true,
        handler(tabId) {
          this.$emit('update:selected', tabId);
          this.selectTabInAui(tabId);
        }
      },

      tabs(newTabs) {
        const selectedTab = newTabs.find(tabComponent => tabComponent.$props.id === this.selectedTabId);
        if (!selectedTab && this.tabs.length) {
          this.selectedTabId = this.tabs[0].id
        }
      }
    },

    mounted() {
      this.updateTabs();
      AJS.tabs.setup();
    },

    updated() {
      // Excessive but simple method of detecting changes in the tab slots
      this.updateTabs();
    },

    methods: {
      selectTabInAui(tabId) {
        this.$nextTick(() => {
          const tabLinks = this.$refs[`tab_link_${tabId}`];
          if (tabLinks) {
            const $tabLink = AJS.$(tabLinks[0]);
            AJS.tabs.change($tabLink);
          }
        });
      },

      getTabComponents() {
        return this.$slots.default
          .filter(vNode =>
            vNode.componentInstance &&
            (vNode.componentOptions.tag === "va-tab" || vNode.componentOptions.tag === "aui-tab"))
          .map(vNode => vNode.componentInstance);
      },

      updateTabs() {
        const newTabs = this.getTabComponents();
        const areTabsChanged = isShallowEqual(newTabs, this.tabs);
        if (!areTabsChanged) {
          this.tabs = newTabs;
        }
      }
    }
  }

  function isShallowEqual(a1, a2) {
    if (a1.length !== a2.length) return false;

    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) return false;
    }

    return true;
  }
</script>
