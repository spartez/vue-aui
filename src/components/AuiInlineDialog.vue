<script>
    const createUniqueId = () => `aui-inline-dialog-${Math.random().toString(36).substring(2, 10)}`;

    export default {
        data() {
            return {
                id: createUniqueId()
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
                    attrs: {
                        id: this.id,
                        open: this.open,
                        persistent: this.persistent,
                        alignment: this.alignment,
                        'responds-to': this.respondsTo !== 'none' ? this.respondsTo : null
                    },
                    ref: 'inlineDialogElement'
                }, this.$slots.dialog)
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
            // Fix for Chrome - elements are not added properly inside the wrapper
            const dialogContents = document.querySelector(`#${this.id} .aui-inline-dialog-contents`);
            if (dialogContents) {
              let element = dialogContents.nextSibling;
              while (element) {
                  dialogContents.appendChild(element);
                  element = element.nextSibling
              }
            }

            this.$refs.inlineDialogElement.addEventListener('aui-hide', () => this.$emit('aui-hide'));
            this.$refs.inlineDialogElement.addEventListener('aui-show', () => this.$emit('aui-show'));
        }
    };
</script>
