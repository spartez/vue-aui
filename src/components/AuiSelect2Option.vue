<script>
  export default{
    props: ['value'],

    render() {
    },

    mounted () {
      this.$parent.$emit('optionsChanged');
    },

    destroyed() {
      this.$parent.$emit('optionsChanged');
    }
  }
</script>
