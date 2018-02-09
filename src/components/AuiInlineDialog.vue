<script>
  import {createUniqueId} from './utils'

  export default {
    data() {
      return {
        id: createUniqueId('aui-inline-dialog')
      };
    },

    props: {
      open: Boolean,
      persistent: Boolean,
      alignment: String,
      respondsTo: {
        type: String,
        default: 'toggle'
      }
    },

    render(h) {
      const triggerVnode = this.$slots.trigger[0];
      this.injectAttributes(triggerVnode);

      return h('span', [
        this.$slots.trigger,
        h('aui-inline-dialog', {
          'class': {
            'vue-inline-dialog': true
          },
          attrs: {
            id: this.id,
            open: this.open,
            persistent: this.persistent,
            alignment: this.alignment,
            'responds-to': this.respondsTo !== 'none' ? this.respondsTo : null
          },
          ref: 'inlineDialogElement'
        }, [
          h('div', {
            'class': {
              'aui-inline-dialog-contents': true
            }
          }, this.$slots.dialog)
        ])
      ]);
    },

    methods: {
      injectAttributes(vnode) {
        vnode.data.attrs = {
          ...vnode.data.attrs,
          'href': `#${this.id}`,
          'aria-controls': this.id,
          'data-aui-trigger': this.respondsTo !== 'none'
        };
      }
    },

    mounted() {
      this.$refs.inlineDialogElement.addEventListener('aui-hide', () => {
        this.$emit('aui-hide'); // Deprecated, remove in 1.0
        this.$emit('hide');
        this.$emit("update:open", false)
      });
      this.$refs.inlineDialogElement.addEventListener('aui-show', () => {
        this.$emit('aui-show'); // Deprecated, remove in 1.0
        this.$emit('show');
        this.$emit("update:open", true)
      });
    }
  };
</script>

<style>
  /* Fix for Chrome - elements are not added properly inside the wrapper */
  aui-inline-dialog.vue-inline-dialog .aui-inline-dialog-contents:nth-last-child(2) {
    display: none;
  }

  aui-inline-dialog.vue-inline-dialog .aui-inline-dialog-contents .aui-inline-dialog-contents {
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: none;
    overflow: auto;
    padding: 0;
  }
</style>
