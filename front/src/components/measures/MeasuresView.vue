<template>
    <div class="specs-wrapper">
        <popup
            title="Oyoyoyo 🙌"
            subtitle="Nouvelle version dispo"
            content="le content"
            buttonLabel= "OK, j'ai compris FDP"
            v-bind:showModal='showModal'
        >
        </popup>
        <sidebar></sidebar>
        <content class="iframe">
            <iframe :src="src" width="100%" height="100%"></iframe>
        </content>
    </div>
</template>

<script>


import Sidebar from './SidebarView'
import popup from '../general/popup'
import store from '../../store/store.js'
import Vuex from 'vuex'


export default {
  store:store,
  props: ['src'],
  components: {
    Sidebar,
    popup
  },
  computed: {
    ...Vuex.mapGetters(['showModal'])

  }
}
</script>

<style lang="css">
.specs-wrapper {
position: fixed;
display: flex;
width: 100%;
height: 100vh;

}
.iframe {
    height: 100%;
    width: 100%;
    background: #191919;
}
</style>
