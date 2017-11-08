export default {
  props: {
    text: String,
    value: String,
    data: Object
  },

  watch: {
    text() {
      this.optionsChanged();
    },
    value() {
      this.optionsChanged();
    },
    data() {
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
      this.$parent.$emit('optionsChanged')
    }
  }
}
