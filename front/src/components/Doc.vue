<template lang="html">
    <div class="doc">
        <h1>hello world!</h1>
        <p v-html=''></p>
        <p>{{  }}</p>
        <p>{{ mdMeta }}</p>
    </div>
</template>

<script>
import Api from '@/services/api'
import store from '../store/store.js'
import Vuex from 'vuex'
export default {
    name: 'Doc',
    store:store,

    methods : {
      ...Vuex.mapActions([
        'getDocColors'
      ]),
      getInfo: function() {
        this.getDocColors()
      },
    },
    mounted() {
      this.getInfo()

    },
    computed: {
      ...Vuex.mapGetters(['mdMeta'])
    }

}
</script>

<style lang="css">
</style>
