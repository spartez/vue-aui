// Deprecated imports
import AuiButton from './components/buttons/Button'
import AuiButtons from './components/buttons/Buttons.vue'
import AuiToggleButton from './components/buttons/ToggleButton.vue'

import AuiNavGroup from './components/navigation/NavGroup.vue'
import AuiNavHeader from './components/navigation/NavHeader.vue'
import AuiNavItem from './components/navigation/NavItem.vue'
import AuiNavTab from './components/navigation/NavTab.vue'
import AuiNavVerticalRouter from './components/navigation/NavVerticalRouter.js'

import AuiSelect2Multi from './components/select2/AuiSelect2Multi.vue'
import AuiSelect2Option from './components/select2/AuiSelect2Option'
import AuiSelect2Single from './components/select2/AuiSelect2Single.vue'

import AuiTab from './components/tabs/Tab.vue'
import AuiTabs from './components/tabs/Tabs.vue'

import AuiAvatar from './components/Avatar.vue'
import AuiDialog from './components/Dialog.vue'
import AuiIcon from './components/Icon'
import AuiLozenge from './components/Lozenge.vue'
import AuiMessage from './components/Message'
import AuiProgressIndicator from './components/ProgressIndicator.vue'
import AuiSpinner from './components/Spinner.vue'
import AuiTooltip from './directives/Tooltip'
import AuiInlineDialog from './components/InlineDialog'
// end of deprecated imports

// Deprecated imports
import VaBadge from './components/buttons/Badge'
import VaButton from './components/buttons/Button'
import VaButtons from './components/buttons/Buttons.vue'
import VaToggleButton from './components/buttons/ToggleButton.vue'

import VaNavGroup from './components/navigation/NavGroup.vue'
import VaNavHeader from './components/navigation/NavHeader.vue'
import VaNavItem from './components/navigation/NavItem.vue'
import VaNavTab from './components/navigation/NavTab.vue'
import VaNavVerticalRouter from './components/navigation/NavVerticalRouter.js'

import VaSelect2Multi from './components/select2/AuiSelect2Multi.vue'
import VaSelect2Option from './components/select2/AuiSelect2Option'
import VaSelect2Single from './components/select2/AuiSelect2Single.vue'

import VaTab from './components/tabs/Tab.vue'
import VaTabs from './components/tabs/Tabs.vue'

import VaAvatar from './components/Avatar.vue'
import VaDialog from './components/Dialog.vue'
import VaIcon from './components/Icon'
import VaLozenge from './components/Lozenge.vue'
import VaMessage from './components/Message'
import VaProgressIndicator from './components/ProgressIndicator.vue'
import VaSpinner from './components/Spinner.vue'
import VaTooltip from './directives/Tooltip'
import VaInlineDialog from './components/InlineDialog'

export {
  // Deprecated start
  AuiButton,
  AuiButtons,
  AuiToggleButton,
  AuiNavGroup,
  AuiNavHeader,
  AuiNavItem,
  AuiNavTab,
  AuiNavVerticalRouter,
  AuiSelect2Multi,
  AuiSelect2Option,
  AuiSelect2Single,
  AuiTab,
  AuiTabs,
  AuiAvatar,
  AuiDialog,
  AuiIcon,
  AuiLozenge,
  AuiMessage,
  AuiProgressIndicator,
  AuiSpinner,
  AuiTooltip,
  AuiInlineDialog,
  // Deprecated end

  VaBadge,
  VaButton,
  VaButtons,
  VaToggleButton,
  VaNavGroup,
  VaNavHeader,
  VaNavItem,
  VaNavTab,
  VaNavVerticalRouter,
  VaSelect2Multi,
  VaSelect2Option,
  VaSelect2Single,
  VaTab,
  VaTabs,
  VaAvatar,
  VaDialog,
  VaIcon,
  VaLozenge,
  VaMessage,
  VaProgressIndicator,
  VaSpinner,
  VaTooltip,
  VaInlineDialog
};

export default {
  install(Vue, options) {
    // Deprecated components
    Vue.component('aui-button', AuiButton)
    Vue.component('aui-buttons', AuiButtons)
    Vue.component('aui-toggle-button', AuiToggleButton)

    Vue.component('aui-nav-group', AuiNavGroup)
    Vue.component('aui-nav-header', AuiNavHeader)
    Vue.component('aui-nav-item', AuiNavItem)
    Vue.component('aui-nav-tab', AuiNavTab)
    Vue.component('aui-nav-vertical', AuiNavVerticalRouter)

    Vue.component('aui-select2-multi', AuiSelect2Multi)
    Vue.component('aui-select2-option', AuiSelect2Option)
    Vue.component('aui-tabs', AuiTabs)
    Vue.component('aui-tab', AuiTab)
    Vue.component('aui-select2-single', AuiSelect2Single)

    Vue.component('aui-avatar', AuiAvatar)
    Vue.component('aui-dialog', AuiDialog)
    Vue.component('aui-icon', AuiIcon)
    Vue.component('aui-lozenge', AuiLozenge)
    Vue.component('aui-message', AuiMessage)
    Vue.component('aui-progress-indicator', AuiProgressIndicator)
    Vue.component('aui-spinner', AuiSpinner)

    Vue.directive('aui-tooltip', AuiTooltip)
    // end of deprecated

    Vue.component('va-badge', VaBadge)
    Vue.component('va-button', VaButton)
    Vue.component('va-buttons', VaButtons)
    Vue.component('va-toggle', VaToggleButton)

    Vue.component('va-nav-group', VaNavGroup)
    Vue.component('va-nav-header', VaNavHeader)
    Vue.component('va-nav-item', VaNavItem)
    Vue.component('va-nav-tab', VaNavTab)
    Vue.component('va-nav-vertical', VaNavVerticalRouter)

    Vue.component('va-select2-multi', VaSelect2Multi)
    Vue.component('va-select2-option', VaSelect2Option)
    Vue.component('va-select2-single', VaSelect2Single)
    Vue.component('va-tabs', VaTabs)
    Vue.component('va-tab', VaTab)

    Vue.component('va-avatar', VaAvatar)
    Vue.component('va-dialog', VaDialog)
    Vue.component('va-icon', VaIcon)
    Vue.component('va-lozenge', VaLozenge)
    Vue.component('va-message', VaMessage)
    Vue.component('va-progress-indicator', VaProgressIndicator)
    Vue.component('va-spinner', VaSpinner)
    Vue.component('va-inline-dialog', VaInlineDialog)

    Vue.directive('va-tooltip', AuiTooltip)
  }
}
