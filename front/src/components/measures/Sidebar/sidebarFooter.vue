<template lang="html">
  <div class="wrapper">
    <a href="#" class="button default">Dowload Assets</a>
    <a href="#" class="button dropbox">View assets</a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../../general.scss';

.wrapper {
  display: flex;
  flex-direction: column;
  padding: 1em;

  .button {
    text-align: center;
    margin-bottom: .5em;


  }
}


</style>
