<template>
  <div>
    <h2>Select2 Single</h2>
    <h3>Examples</h3>
    <p>
      <aui-select2-single v-model="selectValue" placeholder="Select any value">
        <aui-select2-option value="value1">Option 1</aui-select2-option>
        <aui-select2-option value="value2">Option 2</aui-select2-option>
      </aui-select2-single>
      <span>{{selectValue}}</span>
    </p>
    <p>
      <aui-select2-single v-model="selectValue2" placeholder="Select any value" class="custom-class">
        <aui-select2-option value="value1">Any value</aui-select2-option>
      </aui-select2-single>
      <button class="aui-button aui-button-link" @click="selectValue2 = undefined">Clear value</button>
    </p>
    <p>
    <form class="aui">
      <aui-select2-multi v-model="selectValues">
        <aui-select2-option value="value1">Value 1</aui-select2-option>
        <aui-select2-option value="value2">Value 2</aui-select2-option>
        <aui-select2-option value="value3">Value 3</aui-select2-option>
      </aui-select2-multi>
    </form>
    <span>{{selectValues}}</span>

    <form class="aui">
      <aui-select2-multi v-model="selectTags" tags-mode>
        <aui-select2-option value="tag1">Tag 1</aui-select2-option>
        <aui-select2-option value="tag2">Tag 2</aui-select2-option>
      </aui-select2-multi>
    </form>
    <span>{{selectTags}}</span>
    </p>
    <h2>Usage</h2>
    <p>
      <iframe height='465' scrolling='no' title='vue-aui selects demo'
              src='//codepen.io/dskrodzki/embed/KNeOex/?height=465&theme-id=light&default-tab=html,result&embed-version=2'
              frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a
        href='http://codepen.io/dskrodzki/pen/KNeOex/'>vue-aui selects demo</a> by Damian Skrodzki (<a
        href='http://codepen.io/dskrodzki'>@dskrodzki</a>) on <a href='http://codepen.io'>CodePen</a>.
      </iframe>
    </p>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        selectValue: 'value1',
        selectValue2: undefined,
        selectValues: ['value1'],
        selectTags: ["tag1"]
      }
    }
  }
</script>

<style scoped>
  .custom-class {
    width: 300px;
  }
</style>
