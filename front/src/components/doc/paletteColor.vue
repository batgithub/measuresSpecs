<template lang="html">
  <div class="color-wrapper" @click="doCopy(colorCode, id)">
    <span class="color-bg" :style="'background:'+colorCode+';'">
    </span>
    <div class="color-infos">
      <span class="color-name">{{colorName}}</span>
      <span class="color-code" :id="id">{{colorCode}}</span>
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
    'colorName','colorCode', 'id'
  ],
  methods: {
    doCopy: function (value, id) {
      this.$copyText(value).then(function (e) {
        var e = document.getElementById(id)
        e.innerHTML = "Copied!"
        setTimeout(function(){
          e.innerHTML = value
        },800)
      }, function (e) {
        console.log("error copy");
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
    width: 9rem;

    &:hover {
      box-shadow: 4px 4px 0px 0px rgba($secondary, .4);
    }


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
