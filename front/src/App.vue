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
        this.getDocColors()
      },
      methods : {
        ...Vuex.mapActions([
          'getDocColors',
        ])
      }

  }

</script>

<style lang="scss">
@import 'components/general.scss';

</style>
