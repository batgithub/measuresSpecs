<template lang="html">
  <div class="background">
      <div class="container">
          <h1 class="title">Oyoyoyo</h1>
          <span class="subtitle">Nouvelle version dispo</span>
          <div class="content">
          </div>
          <div class="actions">
              <buttons :link='' label='' className=''></buttons>

          </div>
      </div>
  </div>
</template>

<script>
import buttons from './buttons'
export default {
    components: {
        buttons
    },
    props : [title, subtitle, content, idTriger]



}
</script>

<style lang="scss">
</style>
