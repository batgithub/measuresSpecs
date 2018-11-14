<template lang="html">
    <div class="emailing">
      <div class="container">
        <h1>Emailing doc</h1>
        <div class="text" v-html='docEmail'></div>
      </div>
    </div>
</template>
<script>
import Vuex from 'vuex'
import Api from '@/services/api'
import store from '../store/store.js'


export default {
  name:'Email',
  store:store,
  computed: {
    ...Vuex.mapGetters([
      'docEmail'
    ])
  }
}
</script>
<style lang="scss" >
@import './general.scss';
@import './highlighter.scss';
  .emailing .container {
    padding: 2em;
    background: white;
  }
  pre {
    background: $gray-800;
    padding: 2em;
    border-radius: $radius;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

</style>
