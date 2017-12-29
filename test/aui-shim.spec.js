import './aui-shim'

describe('aui-shim.js', () => {
  it('AJS should be available', () => {
    const flag = AJS.flag({title:"AJS works"})
    expect(flag.className).toBe('aui-flag')
    expect(flag.children[0].className).toBe('aui-message aui-message-info info closeable shadowed')
  })
})
