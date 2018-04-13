import VaBadge from './components/buttons/Badge'
import VaButton from './components/buttons/Button'
import VaButtons from './components/buttons/Buttons.vue'
import VaToggleButton from './components/buttons/ToggleButton.vue'

import VaNavGroup from './components/navigation/NavGroup.vue'
import VaNavHeader from './components/navigation/NavHeader.vue'
import VaNavItem from './components/navigation/NavItem.vue'
import VaNavTab from './components/navigation/NavTab.vue'
import VaNavVerticalRouter from './components/navigation/NavVerticalRouter.js'

import VaSelect2 from './components/select2/Select2'
import VaSelect2Multi from './components/select2/Select2Multi.vue'
import VaSelect2Option from './components/select2/Select2Option'
import VaSelect2Single from './components/select2/Select2Single.vue'

import VaTab from './components/tabs/Tab.vue'
import VaTabs from './components/tabs/Tabs.vue'

import VaAvatar from './components/Avatar.vue'
import VaDialog from './components/Dialog.vue'
import VaIcon from './components/Icon'
import VaLozenge from './components/Lozenge.vue'
import VaMessage from './components/Message'
import VaProgressIndicator from './components/ProgressIndicator.vue'
import VaProgressTracker from './components/progress-tracker/ProgressTracker.vue'
import VaProgressTrackerStep from './components/progress-tracker/ProgressTrackerStep.vue'
import VaSpinner from './components/Spinner.vue'
import VaTooltip from './directives/Tooltip'
import VaInlineDialog from './components/InlineDialog'

// Deprecated exports
export {
  VaButton as AuiButton,
  VaButtons as AuiButtons,
  VaToggleButton as AuiToggleButton,
  VaNavGroup as AuiNavGroup,
  VaNavHeader as AuiNavHeader,
  VaNavItem as AuiNavItem,
  VaNavTab as AuiNavTab,
  VaNavVerticalRouter as AuiNavVerticalRouter,
  VaSelect2Multi as AuiSelect2Multi,
  VaSelect2Option as AuiSelect2Option,
  VaSelect2Single as AuiSelect2Single,
  VaTab as AuiTab,
  VaTabs as AuiTabs,
  VaAvatar as AuiAvatar,
  VaDialog as AuiDialog,
  VaIcon as AuiIcon,
  VaLozenge as AuiLozenge,
  VaMessage as AuiMessage,
  VaProgressIndicator as AuiProgressIndicator,
  VaProgressTracker as AuiProgressTracker,
  VaProgressTrackerStep as AuiProgressTrackerStep,
  VaSpinner as AuiSpinner,
  VaTooltip as AuiTooltip,
  VaInlineDialog as AuiInlineDialog,
}

export {
  VaBadge,
  VaButton,
  VaButtons,
  VaToggleButton,
  VaNavGroup,
  VaNavHeader,
  VaNavItem,
  VaNavTab,
  VaNavVerticalRouter,
  VaSelect2,
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
  VaProgressTracker,
  VaProgressTrackerStep,
  VaSpinner,
  VaTooltip,
  VaInlineDialog
};

function deprecated(component) {
  const DeprecatedMixin = {
    created() {
      console.warn(`You are using deprecated component with name "${this.$vnode.componentOptions.tag}". Use one with "va-" prefix instead.`);
    }
  };

  const mixins = component.mixins
    ? [...component.mixins, DeprecatedMixin]
    : [DeprecatedMixin];
  return {...component, mixins}
}

/* This is an extraction from AUI but css minifier sometimes minifies this rule wrongly in other plugins */
function fixSelect2ClearButtonsCss() {
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `
/* Clear select2's overrides for retina displays */
@media all, (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5) {
.aui-select2-container.select2-container .select2-search-choice-close,
.aui-select2-container.select2-container .select2-choice abbr {
    /* !important to ensure that the select2 hover state doesn't modify the background position */
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAKUlEQVQI12NgYFj0nwEKwKxF/9P+Q4TgLAgDIQEVQuJiCKBpwWoosrUAzbg31XT4p6QAAAAASUVORK5CYII=') 0 0 no-repeat !important;
    background-size: 8px !important;
  }
}`;
  document.body.appendChild(css);
}

function registerAllDeprecated(Vue) {
  Vue.component('aui-button', deprecated(VaButton));
  Vue.component('aui-buttons', deprecated(VaButtons));
  Vue.component('aui-toggle-button', deprecated(VaToggleButton));

  Vue.component('aui-nav-group', deprecated(VaNavGroup));
  Vue.component('aui-nav-header', deprecated(VaNavHeader));
  Vue.component('aui-nav-item', deprecated(VaNavItem));
  Vue.component('aui-nav-tab', deprecated(VaNavTab));
  Vue.component('aui-nav-vertical', deprecated(VaNavVerticalRouter));

  Vue.component('aui-select2-multi', deprecated(VaSelect2Multi));
  Vue.component('aui-select2-option', deprecated(VaSelect2Option));
  Vue.component('aui-tabs', deprecated(VaTabs));
  Vue.component('aui-tab', deprecated(VaTab));
  Vue.component('aui-select2-single', deprecated(VaSelect2Single));

  Vue.component('aui-avatar', deprecated(VaAvatar));
  Vue.component('aui-dialog', deprecated(VaDialog));
  Vue.component('aui-icon', deprecated(VaIcon));
  Vue.component('aui-lozenge', deprecated(VaLozenge));
  Vue.component('aui-message', deprecated(VaMessage));
  Vue.component('aui-progress-indicator', deprecated(VaProgressIndicator));
  Vue.component('aui-progress-tracker', deprecated(VaProgressTracker));
  Vue.component('aui-progress-tracker-step', deprecated(VaProgressTrackerStep));

  Vue.directive('aui-tooltip', deprecated(VaTooltip));
}

function registerAll(Vue) {
  Vue.component('va-badge', VaBadge);
  Vue.component('va-button', VaButton);
  Vue.component('va-buttons', VaButtons);
  Vue.component('va-toggle', VaToggleButton);

  Vue.component('va-nav-group', VaNavGroup);
  Vue.component('va-nav-header', VaNavHeader);
  Vue.component('va-nav-item', VaNavItem);
  Vue.component('va-nav-tab', VaNavTab);
  Vue.component('va-nav-vertical', VaNavVerticalRouter);

  Vue.component('va-select2', VaSelect2);
  Vue.component('va-select2-multi', VaSelect2Multi);
  Vue.component('va-select2-option', VaSelect2Option);
  Vue.component('va-select2-single', VaSelect2Single);
  Vue.component('va-tabs', VaTabs);
  Vue.component('va-tab', VaTab);

  Vue.component('va-avatar', VaAvatar);
  Vue.component('va-dialog', VaDialog);
  Vue.component('va-icon', VaIcon);
  Vue.component('va-lozenge', VaLozenge);
  Vue.component('va-message', VaMessage);
  Vue.component('va-progress-indicator', VaProgressIndicator);
  Vue.component('va-progress-tracker', VaProgressTracker);
  Vue.component('va-progress-tracker-step', VaProgressTrackerStep);
  Vue.component('va-spinner', VaSpinner);
  Vue.component('va-inline-dialog', VaInlineDialog);

  Vue.directive('va-tooltip', VaTooltip);
}

export default {
  install(Vue, options) {
    Vue.config.ignoredElements.push('aui-badge');

    fixSelect2ClearButtonsCss();

    registerAllDeprecated(Vue);
    registerAll(Vue);
  }
}
