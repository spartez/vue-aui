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
import VaTable from './components/Table'

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
  VaTable as AuiTable
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
  VaSelect2Option,
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
  VaInlineDialog,
  VaTable
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
  Vue.component('AuiButton', deprecated(VaButton));
  Vue.component('AuiButtons', deprecated(VaButtons));
  Vue.component('AuiToggleButton', deprecated(VaToggleButton));

  Vue.component('AuiNavGroup', deprecated(VaNavGroup));
  Vue.component('AuiNavHeader', deprecated(VaNavHeader));
  Vue.component('AuiNavItem', deprecated(VaNavItem));
  Vue.component('AuiNavTab', deprecated(VaNavTab));
  Vue.component('AuiNavVertical', deprecated(VaNavVerticalRouter));

  Vue.component('AuiSelect2Multi', deprecated(VaSelect2Multi));
  Vue.component('AuiSelect2Option', deprecated(VaSelect2Option));
  Vue.component('AuiTabs', deprecated(VaTabs));
  Vue.component('AuiTab', deprecated(VaTab));
  Vue.component('AuiSelect2Single', deprecated(VaSelect2Single));

  Vue.component('AuiAvatar', deprecated(VaAvatar));
  Vue.component('AuiDialog', deprecated(VaDialog));
  Vue.component('AuiIcon', deprecated(VaIcon));
  Vue.component('AuiLozenge', deprecated(VaLozenge));
  Vue.component('AuiMessage', deprecated(VaMessage));
  Vue.component('AuiProgressIndicator', deprecated(VaProgressIndicator));
  Vue.component('AuiProgressTracker', deprecated(VaProgressTracker));
  Vue.component('AuiProgressTrackerStep', deprecated(VaProgressTrackerStep));
  Vue.component('AuiTable', deprecated(VaTable));

  Vue.directive('aui-tooltip', deprecated(VaTooltip));
}

function registerAll(Vue) {
  Vue.component('VaBadge', VaBadge);
  Vue.component('VaButton', VaButton);
  Vue.component('VaButtons', VaButtons);
  Vue.component('VaToggle', VaToggleButton);

  Vue.component('VaNavGroup', VaNavGroup);
  Vue.component('VaNavHeader', VaNavHeader);
  Vue.component('VaNavItem', VaNavItem);
  Vue.component('VaNavTab', VaNavTab);
  Vue.component('VaNavVertical', VaNavVerticalRouter);

  Vue.component('VaSelect2', VaSelect2);
  Vue.component('VaSelect2Option', VaSelect2Option);
  Vue.component('VaTabs', VaTabs);
  Vue.component('VaTab', VaTab);

  Vue.component('VaAvatar', VaAvatar);
  Vue.component('VaDialog', VaDialog);
  Vue.component('VaIcon', VaIcon);
  Vue.component('VaLozenge', VaLozenge);
  Vue.component('VaMessage', VaMessage);
  Vue.component('VaProgressIndicator', VaProgressIndicator);
  Vue.component('VaProgressTracker', VaProgressTracker);
  Vue.component('VaProgressTrackerStep', VaProgressTrackerStep);
  Vue.component('VaSpinner', VaSpinner);
  Vue.component('VaInlineDialog', VaInlineDialog);
  Vue.component('VaTable', VaTable);

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
