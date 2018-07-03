<template lang="html">
    <div class="doc">
        <h1>hello world!</h1>
        <p v-html='md.parsedContent'></p>
        <p>{{ mdMeta.colors }}</p>
        <p>{{ modifTime }}</p>
        <p>{{ dataApi }}</p>
    </div>
</template>

<script>
import Api from '@/services/api'
import store from '../store/store.js'
import Vuex from 'vuex'

export default {
    name: 'Doc',
    store: store,
    data() {
        return {
            md: [],
            mdMeta: [],
            modifTime: []
        }
    },
    computed: {
      ...Vuex.mapGetters(['dataApi'])
    },
    mounted() {

        // get markdown
        var backPath = "/markdown/documentation/colors"
        this.getDataApi(backPath)

        // Api().get(backPath)
        // .then(response => {
        //   this.md = response.data
        //   this.mdMeta = response.data.meta
        //   this.modifTime = response.data.modified
        //
        // })
        // .catch(e => {
        //   this.errors.push(e)
        // })
    },
    methods: {
      ...Vuex.mapActions(['getDataApi']),
      getDataApi: function(pathToFolder){
        this.getDataApi(pathToFolder)
      }
    }

}
</script>

<style lang="css">
</style>
