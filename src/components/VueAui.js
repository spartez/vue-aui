import AuiButton from './buttons/AuiButton'
import AuiButtons from './buttons/AuiButtons.vue'
import AuiToggleButton from './buttons/AuiToggleButton.vue'

import AuiNavGroup from './navigation/AuiNavGroup.vue'
import AuiNavHeader from './navigation/AuiNavHeader.vue'
import AuiNavItem from './navigation/AuiNavItem.vue'
import AuiNavTab from './navigation/AuiNavTab.vue'
import AuiNavVerticalRouter from './navigation/AuiNavVerticalRouter.js'

import AuiProgressTracker from './progress-tracker/AuiProgressTracker.vue'
import AuiProgressTrackerStep from './progress-tracker/AuiProgressTrackerStep.vue'

import AuiSelect2Multi from './select2/AuiSelect2Multi.vue'
import AuiSelect2Option from './select2/AuiSelect2Option'
import AuiSelect2Single from './select2/AuiSelect2Single.vue'

import AuiTab from './tabs/AuiTab.vue'
import AuiTabs from './tabs/AuiTabs.vue'

import AuiAvatar from './AuiAvatar.vue'
import AuiDialog from './AuiDialog.vue'
import AuiIcon from './AuiIcon'
import AuiLozenge from './AuiLozenge.vue'
import AuiMessage from './AuiMessage'
import AuiProgressIndicator from './AuiProgressIndicator.vue'
import AuiSpinner from './AuiSpinner.vue'
import AuiTooltip from './AuiTooltip'
import AuiInlineDialog from './AuiInlineDialog'

export {
  AuiButton,
  AuiButtons,
  AuiToggleButton,
  AuiNavGroup,
  AuiNavHeader,
  AuiNavItem,
  AuiNavTab,
  AuiNavVerticalRouter,
  AuiProgressTracker,
  AuiProgressTrackerStep,
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
  AuiInlineDialog
};

export default {
  install(Vue, options) {
    Vue.component('aui-button', AuiButton)
    Vue.component('aui-buttons', AuiButtons)
    Vue.component('aui-toggle-button', AuiToggleButton)

    Vue.component('aui-nav-group', AuiNavGroup)
    Vue.component('aui-nav-header', AuiNavHeader)
    Vue.component('aui-nav-item', AuiNavItem)
    Vue.component('aui-nav-tab', AuiNavTab)
    Vue.component('aui-nav-vertical', AuiNavVerticalRouter)

    Vue.component('aui-progress-tracker', AuiProgressTracker)
    Vue.component('aui-progress-tracker-step', AuiProgressTrackerStep)

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
    Vue.component('va-inline-dialog', AuiInlineDialog)

    Vue.directive('aui-tooltip', AuiTooltip)
  }
}
