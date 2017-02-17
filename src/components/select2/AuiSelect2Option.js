export default{
  props: {
    value: String
  },

  render() {
  },

  mounted () {
    this.$parent.$emit('optionsChanged');
  },

  destroyed() {
    this.$parent.$emit('optionsChanged');
  }
}
