import AuiAvatar from './AuiAvatar.vue'

import {shallow} from 'vue-test-utils'

describe('AuiAvatar.vue', () => {
  it('should render correct contents', () => {
    const wrapper = shallow(AuiAvatar, {propsData: {src: 'test'}})
    expect(wrapper.is('span')).toBe(true);
    expect(wrapper.hasClass('aui-avatar')).toBe(true);
    expect(wrapper.html()).toEqual(`<span class="aui-avatar aui-avatar-medium"><span class="aui-avatar-inner"><img src="test"></span></span>`)
  })
})
