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
import AuiSelect2Single from './components/select2/Select2Single.vue'

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

import Select2 from './components/select2/Select2'
import Select2Multi from './components/select2/Select2Multi.vue'
import Select2Option from './components/select2/Select2Option'
import Select2Single from './components/select2/Select2Single.vue'

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
  Select2,
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

function deprecated(component) {
  const DeprecatedMixin = {
    created() {
      console.warn(`You are using deprecated version of component ${this.$vnode.componentOptions.tag} starting with "aui". Use "va-" prefix instead.`);
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

export default {
  install(Vue, options) {
    Vue.config.ignoredElements.push('aui-badge');

    fixSelect2ClearButtonsCss();

    Vue.component('aui-button', deprecated(AuiButton));
    Vue.component('aui-buttons', deprecated(AuiButtons));
    Vue.component('aui-toggle-button', deprecated(AuiToggleButton));

    Vue.component('aui-nav-group', deprecated(AuiNavGroup));
    Vue.component('aui-nav-header', deprecated(AuiNavHeader));
    Vue.component('aui-nav-item', deprecated(AuiNavItem));
    Vue.component('aui-nav-tab', deprecated(AuiNavTab));
    Vue.component('aui-nav-vertical', deprecated(AuiNavVerticalRouter));

    Vue.component('aui-select2-multi', deprecated(AuiSelect2Multi));
    Vue.component('aui-select2-option', deprecated(AuiSelect2Option));
    Vue.component('aui-tabs', deprecated(AuiTabs));
    Vue.component('aui-tab', deprecated(AuiTab));
    Vue.component('aui-select2-single', deprecated(AuiSelect2Single));

    Vue.component('aui-avatar', deprecated(AuiAvatar));
    Vue.component('aui-dialog', deprecated(AuiDialog));
    Vue.component('aui-icon', deprecated(AuiIcon));
    Vue.component('aui-lozenge', deprecated(AuiLozenge));
    Vue.component('aui-message', deprecated(AuiMessage));
    Vue.component('aui-progress-indicator', deprecated(AuiProgressIndicator));

    Vue.directive('aui-tooltip', deprecated(AuiTooltip));

    Vue.component('va-badge', Badge);
    Vue.component('va-button', Button);
    Vue.component('va-buttons', Buttons);
    Vue.component('va-toggle', ToggleButton);

    Vue.component('va-nav-group', NavGroup);
    Vue.component('va-nav-header', NavHeader);
    Vue.component('va-nav-item', NavItem);
    Vue.component('va-nav-tab', NavTab);
    Vue.component('va-nav-vertical', NavVerticalRouter);

    Vue.component('va-select2', Select2);
    Vue.component('va-select2-multi', Select2Multi);
    Vue.component('va-select2-option', Select2Option);
    Vue.component('va-select2-single', Select2Single);
    Vue.component('va-tabs', Tabs);
    Vue.component('va-tab', Tab);

    Vue.component('va-avatar', Avatar);
    Vue.component('va-dialog', Dialog);
    Vue.component('va-icon', Icon);
    Vue.component('va-lozenge', Lozenge);
    Vue.component('va-message', Message);
    Vue.component('va-progress-indicator', ProgressIndicator);
    Vue.component('va-spinner', Spinner);
    Vue.component('va-inline-dialog', InlineDialog);

    Vue.directive('va-tooltip', AuiTooltip);
  }
}
