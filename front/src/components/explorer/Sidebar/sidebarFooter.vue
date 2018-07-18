<template lang="html">
  <div class="wrapper">
    <buttons :link='linkDownload' class="button default" label='Dowload Assets'></buttons>
    <buttons :link='linkView' class="button primary" label='View assets'></buttons>

  </div>
</template>

<script>
import buttons from '../../general/buttons'

export default {
  props: ['linkDownload','linkView'],
  components: {
    buttons
  }
}
</script>

<style lang="scss">
@import '../../general.scss';


.wrapper {
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 0px 2px 1px rgba(black,0.1);
  z-index: 10;

  .button {
    text-align: center;
    margin-bottom: .5em;
  }
}


</style>
