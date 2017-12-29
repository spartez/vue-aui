/**
 * So WTF is happening here?
 *
 * All this magic provides jQuery to AUI.
 *
 * AUI is built for web and assumes that the global object is 'window'.
 * In nodejs global object is called 'global' instead (which is the case during the tests).
 * Yet AUI thinks we are still in the browser because jsdom-global (required for vue-test-utils) adds Window object.
 *
 *
 * Now, we need to meet a few requirements to properly provide jQuery for AUI:
 *
 * 1. The following line must register jQuery to 'global' object
 *     (typeof window === 'undefined' ? global : window).__fa4bdecddc16a5afcc6c3490bffabe5c = ...
 *
 * 2. Because jQuery it's referenced this way afterward
 *     var _jquery = __fa4bdecddc16a5afcc6c3490bffabe5c;
 *
 * 3. The global 'window' object must be available and contain jQuery
 *     exports.default = window.jQuery || window.Zepto;
 *
 *
 * Solution
 * ===
 * * condition from 1 must return 'global' so that 2 doesn't break
 * * yet 'window' cannot be undefined because 3 would break!
 * * assigning 'window = global' and adding jQuery there satisfies both! :)
 *
 * Ask Damian (damienix) for more explanation if needed.
 */


const windowOriginal = window

global.jQuery = require('jquery')
window = global
require("@atlassian/aui/dist/aui/js/aui.min")
require("@atlassian/aui/dist/aui/js/aui-experimental.min")
// require("@atlassian/aui/dist/aui/js/aui-datepicker.min")
// require("@atlassian/aui/dist/aui/js/aui-soy.min")

window = windowOriginal

