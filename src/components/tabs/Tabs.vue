<template>
  <div>
    <div class="aui-tabs horizontal-tabs">
      <ul class="tabs-menu">
        <li class="menu-item" :key="tab.hash" v-for="tab in tabs">
          <a :ref="'tab_link_' + tab.hash" :href="'#' + tab.hash" v-html="tab.name"></a>
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
      }
    },
    mounted() {
      console.log('mounted')
      this.updateTabs()
      AJS.tabs.setup()
    },
    updated(){
      console.log('updated')
      this.updateTabs()
    },
    methods: {
      selectDefaultTab() {
        if (this.tabs.length){
          console.log('select first tab')
          this.selectTab(this.tabs[0].hash)
        }
      },
      hasActiveTab(){
        return $('.menu-item.active-tab').length
      },
      selectTab(tabHash) {
        Vue.nextTick(() => {
          const tabLinks = this.$refs[`tab_link_${tabHash}`]
          console.log('TABLINKS', tabLinks)
          if (tabLinks && tabLinks.length) {
            let $tabLink = $(tabLinks[0])
            console.log('$TABLINK', $tabLink)
            AJS.tabs.change($tabLink)
          }
        })
      },
      getTabs() {
        let tabs = []
        this.$slots.default.forEach(vNode => {
          if (vNode.componentInstance && vNode.componentOptions.tag === "va-tab") {
            let tab = vNode.componentInstance
            tabs.push(tab)
          }
        })
        console.log('TABS', tabs)
        return tabs
      },
      tabsChanged(newTabs){
        return  newTabs.length !== this.tabs.length
      },
      updateTabs() {
        let newTabs = this.getTabs()
        if (this.tabsChanged(newTabs)) {
          this.tabs = newTabs
          this.selectDefaultTab()
        }
      }
    }
  }
</script>
