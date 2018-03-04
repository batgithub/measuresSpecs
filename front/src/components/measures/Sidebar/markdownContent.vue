<template lang="html">
  <div class="mdcontent" v-html='content'>
  </div>
</template>

<script>
export default {
  props: [
    'content'
  ]

}
</script>

<style lang="scss">
@import '../../general.scss';
.mdcontent {
  padding: 1em;
  background: $gray-50;

  p {margin-bottom: 1.3em;}

  h1, h2, h3, h4 {
    margin: 1.414em 0 0.5em;
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    margin-top: 0;
    font-size: 2.441em;
  }

  h2 {font-size: 1.953em;}

  h3 {font-size: 1.563em;}

  h4 {font-size: 1.25em;}

  small, .font_small {font-size: 0.8em;}

}
</style>
