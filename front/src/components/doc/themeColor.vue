<template lang="html">
  <div class="themeColor-wrapper" :style="'background:'+colorBG+';'">
    <p class="name" :style="'color:'+onColorCode+';'">{{ color }}</p>
    <p class="ref" :style="'color:'+onColorCode+';'" >{{  colorReference }}</p>
  </div>
</template>

<script>
export default {
  name:'themeColor',
  props: [
    'color',
    'colorReference',
    'id',
    'colorBG',
    'onColorCode'
  ],
}
</script>

<style lang="scss" >
  .themeColor-wrapper {
    box-sizing: border-box;
    width: 12em;
    height: 12em;
    padding: 2em;

    p {
      font-size: 1.2em;
      margin: 0;
    }
    .name {
      font-weight: bold;
    }
    .ref {
      opacity: .85;
    }

  }
</style>
