<template>
  <div>
    <h2>Dialog</h2>
    <h3>Examples</h3>
    <p>
      <aui-dialog title="Example dialog" cancel-button="Cancel" @onClose="alert('Close clicked')">
        Dialog content
      </aui-dialog>
    </p>
    <p>
      <aui-dialog title="Example dialog" :show-close-button="'true'" width="600px" height="100px" max-height="300px"
                  @onClose="alert('Close clicked')">
        Dialog content
        <div slot="header-actions">
          <button class="aui-button aui-button-light">Settings</button>
        </div>
        <div slot="footer-actions">
          <button class="aui-button aui-button-primary">Confirm</button>
        </div>
        <div slot="footer-hint">
          Focus dialog and type ESC to close it.
        </div>
      </aui-dialog>
    </p>
    <h3>Usage</h3>
    <p>
      <iframe height='465' scrolling='no' title='vue-aui dialogs demo'
              src='//codepen.io/dskrodzki/embed/JbZgBo/?height=465&theme-id=light&default-tab=html,result&embed-version=2'
              frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a
        href='http://codepen.io/dskrodzki/pen/JbZgBo/'>vue-aui dialogs demo</a> by Damian Skrodzki (<a
        href='http://codepen.io/dskrodzki'>@dskrodzki</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toggle1: true,
        toggle2: false,
        selectValue: 'value1',
        selectValue2: undefined,
        selectValues: ['value1'],
        selectTags: ["tag1"]
      }
    },

    methods: {
      alert(text) {
        alert(text)
      }
    }
  }
</script>

<style scoped>
  .custom-class {
    width: 300px;
  }
</style>
