<template lang="html">
  <div class="themeColor-wrapper" :style="'background:'+colorBG+';'">
    <div class="">
      <p class="name" :style="'color:'+onColorCode+';'">{{ color }}</p>
      <p class="ref" :style="'color:'+onColorCode+';'" >{{  colorReference }}</p>
    </div>
    <p class="onColor" :style="'color:'+onColorCode+';'" >On color : {{ onColor  }} </p>
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
    'onColorCode',
    'onColor'
  ],
}
</script>

<style lang="scss" >
  .themeColor-wrapper {
    box-sizing: border-box;
    width: 14em;
    height: 14em;
    padding: 1.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-size: 1.2em;
      margin: 0;
    }
    .name {
      font-weight: bold;
      text-transform: uppercase;
    }
    .ref {
      opacity: .85;
    }
    .onColor {
      font-size: .9em;
      opacity: .85;
    }

  }
</style>
