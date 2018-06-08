<template lang="html">
  <div class="wrapper">
    <a :href='linkDownload' class="button default">Dowload Assets</a>
    <a :href='linkView' class="button dropbox">View assets</a>
    <p>Last modification {{ dateModif }}</p>
  </div>
</template>

<script>
export default {
  props: ['linkDownload','linkView', 'dateModif']
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
