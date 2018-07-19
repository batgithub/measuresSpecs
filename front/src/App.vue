<template>
    <div class="app">
      <router-view/>
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from './store/store.js'


  export default {
      name: 'App',
      store:store,

      mounted() {
        this.initApi()
        this.getDocColors()
        this.getDocTheme()
        this.getDocThemeElements()
        this.getDocThemeFontColors()
      },
      methods : {
        ...Vuex.mapActions([
          'getDocColors',
          'initApi',
          'getDocTheme',
          'getDocThemeElements',
          'getDocThemeFontColors'
        ])
      }

  }

</script>

<style lang="scss">
@import 'components/general.scss';

</style>
