<template lang="html">
    <div class="doc">
      <div class="container">
        <h1>Design system Pictarine</h1>
        <h2>{{  mdMeta.title }}</h2>
        <div class="colors">
          <div class="color"  v-for="color in mdMeta.colors">
            <palette-color
              :colorName='color.name'
              :colorCode='color.code'
              >
            </palette-color>
          </div>
        </div>
        <p v-html='mdContent'></p>
      </div>
    </div>
</template>

<script>
import Api from '@/services/api'
import store from '../store/store.js'
import Vuex from 'vuex'
import paletteColor from './doc/paletteColor'


export default {
    name: 'Doc',
    store:store,
    components: {
      paletteColor
    },
    computed: {
      ...Vuex.mapGetters([
        'mdMeta',
        'mdContent'
      ])
    }

}
</script>

<style lang="scss" >
@import './general.scss';
  .doc {
    background: white;
    .colors {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .color {
        margin: 1em;

      }

    }
  }

</style>
