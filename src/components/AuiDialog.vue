<template>
  <section role="dialog" :style="{ width: width }" class="aui-dialog-view-container">
    <header class="aui-dialog2-header">
      <h2 class="aui-dialog2-header-main">
        {{ title }}
      </h2>
      <div class="dialog-header-actions">
        <slot name="header-actions"></slot>
      </div>

      <a class="aui-dialog2-header-close" @click.stop="closeDialogHandler"
         v-show="showCloseButton === true || showCloseButton === 'true'">
        <span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span>
      </a>
    </header>
    <div class="aui-dialog2-content aui-dialog-view-content" :style="{ height: height, 'max-height': maxHeight, }">
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
    props: ['title', 'width', 'height', 'maxHeight', 'showCloseButton', 'cancelButton'],

    mounted: function () {
      AJS.whenIType("Esc").execute(() => {
        if (this.$el.contains(document.activeElement)) {
          this.closeDialogHandler()
        }
      });
    },

    methods: {
      closeDialogHandler: function closeDialogHandler() {
        this.$emit('onClose')
      }
    }
  }
</script>

<style scoped>
  .aui-dialog2-footer-hint a {
    user-select: none;
  }

  .aui-dialog-view-container {
    box-sizing: border-box;
    height: 100%;
    max-width: 1200px;
    padding: 40px 10px 10px;
    max-height: 100%;
    margin: auto;
  }

  .aui-dialog-view-content {
    overflow-y: auto;
    height: calc(100% - 150px);
  }

  .dialog-header-actions {
    display: table-cell;
    vertical-align: middle;
    text-align: right;
  }
</style>
