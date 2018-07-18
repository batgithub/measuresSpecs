<template lang="html">
    <div class="doc">
      <div class="container">
        <h1>Design system Pictarine</h1>
        <section>
          <h2>{{  colorsValues.title }}</h2>
          <div class="colors">
            <div class="color"  v-for="color, index in colorsValues.colors">
              <palette-color
              :colorName='color.name'
              :colorCode='color.code'
              :id='"color-code-text"+index'
              >
            </palette-color>
          </div>
        </div>
        <p v-html='colorsText'></p>
        </section>
        <section>
            <h2>{{  themeValues.title }}</h2>
            <div class="themeColors">
              <div class="themeColor"  v-for="color, index in themeValues.theme">
                <theme-color
                  :color='color.color'
                  :colorReference='color.reference'
                  :id='"color-theme-text"+index'
                  :colorBG='color.code'
                ></theme-color>
              </div>
            </div>

        </section>
      </div>
    </div>
</template>

<script>
import Api from '@/services/api'
import store from '../store/store.js'
import Vuex from 'vuex'
import paletteColor from './doc/paletteColor'
import themeColor from './doc/themeColor'


export default {
    name: 'Doc',
    store:store,
    components: {
      paletteColor,
      themeColor
    },
    computed: {
      ...Vuex.mapGetters([
        'colorsValues',
        'colorsText',
        'themeValues',
        'themeText'
      ])
    }

}
</script>

<style lang="scss" >
@import './general.scss';
  .doc {
    background: white;
    padding: 0 1em;
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
