<template lang="html">
  <div class="color-wrapper" @click="doCopy(colorCode)">
    <span class="color-bg" :style="'background:'+colorCode+';'">
    </span>
    <div class="color-infos">
      <span class="color-name">{{colorName}}</span>
      <span class="color-code">{{colorCode}}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)
export default {
  name:'paletteColor',
  props: [
    'colorName','colorCode'
  ],
  methods: {
    doCopy: function (value) {
      this.$copyText(value).then(function (e) {
      }, function (e) {
      })
    }
  }
}
</script>

<style lang="scss">
@import '../general.scss';
  .color-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1em;
    border: 1px solid $medium-light;
    border-radius: $radius;
    cursor: pointer;


    .color-bg {
      display: flex;
      height: 2em;
      width: 2em;
      border-radius: 100%;
      margin-right: 1em;
    }
    .color-infos {
      display: flex;
      flex-direction: column;
      .color-name {
        text-transform: capitalize;
        font-weight: bold;
        color: $dark;
      }
      .color-code {
        color: $medium-dark;
      }
    }
  }
</style>
