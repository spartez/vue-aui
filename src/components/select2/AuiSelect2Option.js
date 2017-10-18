export default {
  props: {
    text: String,
    value: String
  },

  watch: {
    text() {
      this.optionsChanged();
    },
    value() {
      this.optionsChanged();
    }
  },

  render() {
  },

  mounted() {
    this.optionsChanged();
  },

  destroyed() {
    this.optionsChanged();
  },

  methods: {
    optionsChanged() {
      this.$nextTick(_ => this.$parent.$emit('optionsChanged'))
    }
  }
}
