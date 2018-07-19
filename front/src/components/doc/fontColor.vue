<template lang="html">
  <div class="fontColor-wrapper">
    <p class="name" :style="'color:'+colorCode+';'">{{ color }}</p>
    <div class="fontRef">
      <span class="pill" :style="'background:'+colorCode+';'"></span>
      <p class="ref" :style="'color:'+colorCode+';'" >{{  colorReference }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fontColor',
  props: [
    'color',
    'colorReference',
    'id',
    'colorCode',
    'onColorCode',
    'onColor'
  ],
}
</script>

<style lang="scss">
@import '../general.scss';
  .fontColor-wrapper {
    border: 1px solid $medium-light;
    border-radius: $radius;
    padding: 1em;
    width: 11rem;
    .name {
      text-transform: uppercase;
      font-weight: bold;
      color: $dark;
      margin-bottom: .2em;
      font-size: 1.2em;
    }
    .fontRef {
      display: flex;
      align-items: center;
      .ref {
        margin-bottom: 0;
      }
      .pill {
        display: flex;
        border-radius: 100%;
        height: 1.1em;
        width: 1.1em;
        margin-right: .3em;

      }
    }
  }
</style>
