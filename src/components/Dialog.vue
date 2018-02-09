<template>
  <section role="dialog" :style="{ width: width }" :class="classObject">
    <header class="aui-dialog2-header">
      <h2 class="aui-dialog2-header-main">
        {{ title }}
      </h2>
      <div class="dialog-header-actions">
        <slot name="header-actions"></slot>
      </div>

      <a class="aui-dialog2-header-close" @click.stop="closeDialogHandler" v-show="showCloseButton">
        <span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span>
      </a>
    </header>
    <div class="aui-dialog2-content" :class="{'no-padding': noPadding}"
         :style="{ height: height, 'max-height': maxHeight, }">
      <slot></slot>
    </div>
    <footer class="aui-dialog2-footer">
      <div class="aui-dialog2-footer-actions">
        <slot name="footer-actions"></slot>
        <button v-if="cancelButton" class="aui-button aui-button-link" @click="closeDialogHandler">{{ cancelButton }}
        </button>
      </div>
      <div class="aui-dialog2-footer-hint">
        <slot name="footer-hint"></slot>
      </div>
    </footer>
  </section>
</template>

<script>
  export default {
    props: {
      cancelButton: String,
      floating: Boolean,
      height: String,
      isVisible: {
        type: Boolean,
        default: true
      },
      maxHeight: String,
      noPadding: Boolean,
      showCloseButton: Boolean,
      size: {
        type: String,
        validator(value) {
          return ['small', 'medium', 'large', 'xlarge'].indexOf(value) >= 0
        },
        default: 'medium'
      },
      title: String,
      warning: Boolean,
      width: String,
    },

    computed: {
      classObject() {
        const classObj = {
          'aui-dialog2-warning': this.warning,
          'aui-dialog2': true,
        };
        classObj[`aui-dialog2-${this.size}`] = true;
        return classObj
      }
    },

    watch: {
      isVisible: {
        immediate: true,
        handler() {
          if (!this.floating) return;
          if (this.isVisible) {
            this.$nextTick(() => AJS.dialog2(this.$el).show());
          } else {
            this.$nextTick(() => AJS.dialog2(this.$el).hide());
          }
        }
      }
    },

    mounted() {
      AJS.whenIType("Esc").execute(() => {
        if (this.$el.contains(document.activeElement)) {
          this.closeDialogHandler()
        }
      });

      if (this.floating) {
        AJS.dialog2(this.$el).on("hide", () => this.$emit("update:isVisible", false));
        AJS.dialog2(this.$el).on("show", () => this.$emit("update:isVisible", true));
      }
    },

    methods: {
      closeDialogHandler: function closeDialogHandler() {
        this.$emit('onClose') // Deprecated, remove in 1.0
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .aui-dialog2-content.no-padding {
    padding: 0;
  }

  [data-aui-version^="6"] .aui-dialog2 {
    top: 109px;
    max-width: 1200px;
    height: calc(100% - 120px);
  }

  [data-aui-version^="6"] .aui-dialog2-content {
    height: calc(100% - 70px);
  }

  [data-aui-version^="6"] .dialog-header-actions {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
  }
</style>
