export default {
  bind(el, binding) {
    if (binding.value !== binding.oldValue) {
      updateTooltip(el, binding);
    }
  },
  unbind(el) {
    destroyTooltip(el)
  },
  update(el, binding) {
    if (binding.value !== binding.oldValue) {
      updateTooltip(el, binding);
    }
  }
};

function destroyTooltip(el) {
  const $el = AJS.$(el);
  $el.tooltip('hide');
  $el.removeData('tipsy');
  $el.unbind('.tipsy');
}

function updateTooltip(el, {value, modifiers}) {
  let tooltipOptions = value;
  const m = modifiers;
  const directions = ['nw', 'n', 'ne', 'w', 'e', 'sw', 's', 'se'];

  const optionsFromModifiers = {
    gravity: directions.filter(dir => m[dir])[0],
    html: m.html
  };

  tooltipOptions = typeof tooltipOptions === 'object'
    ? {...optionsFromModifiers, ...tooltipOptions}
    : {...optionsFromModifiers, title: tooltipOptions};

  destroyTooltip(el);

  if (tooltipOptions.title) {
    AJS.$(el).attr('data-tooltip', tooltipOptions.title);
    AJS.$(el).tooltip({...tooltipOptions, title: () => tooltipOptions.title});
  }
}
