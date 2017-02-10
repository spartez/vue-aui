import AuiNavVertical from "./AuiNavVertical.vue"
import AuiNavGroup from "./AuiNavGroup.vue"
import AuiNavItem from "./AuiNavItem.vue"
import AuiNavTab from "./AuiNavTab.vue"

export default {
  render(createElement) {
    const groupsAndHeaders = this.$slots.default
      .filter(s => s.componentOptions)
      .filter(s => s.componentOptions.tag === 'aui-nav-group' || s.componentOptions.tag === 'aui-nav-header');

    const auiNavGroups = groupsAndHeaders.map(groupOrHeader => {
      if (groupOrHeader.componentOptions.tag === 'aui-nav-header') {
        return groupOrHeader
      } else {
        // For some reason attaching event after VNode was created from component doesn't work afterwards
        const children = groupOrHeader.componentOptions && groupOrHeader.componentOptions.children || [];
        const auiNavItems = children
          .filter(s => s.componentOptions)
          .filter(s => s.componentOptions.tag === 'aui-nav-item')
          .map(tab => createElement(AuiNavItem, {
            props: {
              name: tab.componentOptions.propsData.name,
              selected: tab.componentOptions.propsData.name === this.selectedTab,
            },
            nativeOn: {
              click: () => this.selectedTab = tab.componentOptions.propsData.name
            }
          }));
        return createElement(AuiNavGroup, [auiNavItems])
      }
    });

    const selectedItem = groupsAndHeaders
      .reduce((a, b) => b.componentOptions.children ? a.concat(b.componentOptions.children) : a, [])
      .filter(item => item.componentOptions)
      .filter(item => item.componentOptions.tag === 'aui-nav-item')
      .filter(item => item.componentOptions.propsData.name === this.selectedTab)[0];

    const tabElement = createElement(AuiNavTab, selectedItem && selectedItem.componentOptions.children)
    const auiNavVertical = createElement(AuiNavVertical, [auiNavGroups]);
    const auiPagePanelNav = createElement('div', {class: 'aui-page-panel-nav'}, [auiNavVertical]);
    return createElement('div', [auiPagePanelNav, tabElement]);
  },

  data() {
    return {
      selectedTab: undefined
    }
  },

  created() {
    const groupsAndHeaders = this.$slots.default
      .filter(s => s.componentOptions)
      .filter(s => s.componentOptions.tag === 'aui-nav-group' || s.componentOptions.tag === 'aui-nav-header');

    const selectedItem = groupsAndHeaders
      .reduce((a, b) => b.componentOptions.children ? a.concat(b.componentOptions.children) : a, [])
      .filter(item => item.componentOptions)[0]
    this.selectedTab = selectedItem.componentOptions.propsData.name;
  },

  methods: {
    clicked(tab) {
      this.selectedTab = tab.data.attrs.name
    }
  }
}
