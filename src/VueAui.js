// Deprecated imports
import AuiButton from './components/buttons/Button'
import AuiButtons from './components/buttons/Buttons.vue'
import AuiToggleButton from './components/buttons/ToggleButton.vue'

import AuiNavGroup from './components/navigation/NavGroup.vue'
import AuiNavHeader from './components/navigation/NavHeader.vue'
import AuiNavItem from './components/navigation/NavItem.vue'
import AuiNavTab from './components/navigation/NavTab.vue'
import AuiNavVerticalRouter from './components/navigation/NavVerticalRouter.js'

import AuiSelect2Multi from './components/select2/Select2Multi.vue'
import AuiSelect2Option from './components/select2/Select2Option'
import AuiSelect2Single from './components/select2/select2Single.vue'

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

import Badge from './components/buttons/Badge'
import Button from './components/buttons/Button'
import Buttons from './components/buttons/Buttons.vue'
import ToggleButton from './components/buttons/ToggleButton.vue'

import NavGroup from './components/navigation/NavGroup.vue'
import NavHeader from './components/navigation/NavHeader.vue'
import NavItem from './components/navigation/NavItem.vue'
import NavTab from './components/navigation/NavTab.vue'
import NavVerticalRouter from './components/navigation/NavVerticalRouter.js'

import Select2Multi from './components/select2/Select2Multi.vue'
import Select2Option from './components/select2/Select2Option'
import Select2Single from './components/select2/select2Single.vue'

import Tab from './components/tabs/Tab.vue'
import Tabs from './components/tabs/Tabs.vue'

import Avatar from './components/Avatar.vue'
import Dialog from './components/Dialog.vue'
import Icon from './components/Icon'
import Lozenge from './components/Lozenge.vue'
import Message from './components/Message'
import ProgressIndicator from './components/ProgressIndicator.vue'
import Spinner from './components/Spinner.vue'
import Tooltip from './directives/Tooltip'
import InlineDialog from './components/InlineDialog'

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

  Badge,
  Button,
  Buttons,
  ToggleButton,
  NavGroup,
  NavHeader,
  NavItem,
  NavTab,
  NavVerticalRouter,
  Select2Multi,
  Select2Option,
  Select2Single,
  Tab,
  Tabs,
  Avatar,
  Dialog,
  Icon,
  Lozenge,
  Message,
  ProgressIndicator,
  Spinner,
  Tooltip,
  InlineDialog
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

    Vue.component('va-badge', Badge)
    Vue.component('va-button', Button)
    Vue.component('va-buttons', Buttons)
    Vue.component('va-toggle', ToggleButton)

    Vue.component('va-nav-group', NavGroup)
    Vue.component('va-nav-header', NavHeader)
    Vue.component('va-nav-item', NavItem)
    Vue.component('va-nav-tab', NavTab)
    Vue.component('va-nav-vertical', NavVerticalRouter)

    Vue.component('va-select2-multi', Select2Multi)
    Vue.component('va-select2-option', Select2Option)
    Vue.component('va-select2-single', Select2Single)
    Vue.component('va-tabs', Tabs)
    Vue.component('va-tab', Tab)

    Vue.component('va-avatar', Avatar)
    Vue.component('va-dialog', Dialog)
    Vue.component('va-icon', Icon)
    Vue.component('va-lozenge', Lozenge)
    Vue.component('va-message', Message)
    Vue.component('va-progress-indicator', ProgressIndicator)
    Vue.component('va-spinner', Spinner)
    Vue.component('va-inline-dialog', InlineDialog)

    Vue.directive('va-tooltip', AuiTooltip)
  }
}
