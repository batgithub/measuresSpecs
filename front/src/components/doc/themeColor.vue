<template lang="html">
  <div class="themeColor-wrapper" :style="'background:'+colorBG+';'">
    <div class="">
      {{ color }}{{  colorReference }}
    </div>
  </div>
</template>

<script>
export default {
  name:'themeColor',
  props: [
    'color','colorReference', 'id','colorBG'
  ],
}
</script>

<style lang="css">
</style>
