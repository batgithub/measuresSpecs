<template lang="html">
    <div class="doc">
      <div class="container">
        <h1>Design system Pictarine</h1>
        <section>
          <h2>{{  colorsValues.title }}</h2>
          <div class="colors variables">
              <palette-color
              class="color"
              v-for="color, index in colorsValues.colors"
              :key="color.id"
              :colorName='color.name'
              :colorCode='color.code'
              :id='"color-code-text"+index'
              >
            </palette-color>
        </div>
        <p class="text" v-html='colorsText'></p>
        </section>
        <section>
            <h2>{{  themeValues.title }}</h2>
            <div class="themeColors variables">
                <theme-color
                  class="themeColor"
                  v-for="color, index in themeValues.theme"
                  :key="color.id"
                  :color='color.color'
                  :colorReference='color.reference'
                  :id='"color-theme-text"+index'
                  :colorBG='color.code'
                  :onColorCode='color.onColorCode'
                  :onColor='color.onColor'
                ></theme-color>
            </div>
            <p class="text" v-html='themeText'></p>
        </section>
        <section>
            <h3>{{  themeFontColorsValues.title }}</h3>
            <div class="fontColors variables">

                <font-color
                  class="fontColor"
                  v-for="color, index in themeFontColorsValues.theme"
                  :key="color.id"
                  :color='color.color'
                  :colorReference='color.reference'
                  :id='"color-theme-text"+index'
                  :colorCode='color.code'
                  :onColorCode='color.onColorCode'
                  :onColor='color.onColor'
                ></font-color>
            </div>
            <p class="text" v-html='themeFontColorsText'></p>
        </section>
        <section>
            <h3>{{  themeElementsValues.title }}</h3>
            <div class="themeColors variables">
                <theme-color
                  class="themeColor"
                  v-for="colorElements, index in themeElementsValues.theme"
                  :key="colorElements.id"
                  :color='colorElements.color'
                  :colorReference='colorElements.reference'
                  :id='"color-theme-text"+index'
                  :colorBG='colorElements.code'
                  :onColorCode='colorElements.onColorCode'
                  :onColor='colorElements.onColor'
                ></theme-color>
            </div>
            <p class="text" v-html='themeElementsText'></p>
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
import fontColor from './doc/fontColor'


export default {
    name: 'Doc',
    store:store,
    components: {
      paletteColor,
      themeColor,
      fontColor
    },
    computed: {
      ...Vuex.mapGetters([
        'colorsValues',
        'colorsText',
        'themeValues',
        'themeText',
        'themeElementsValues',
        'themeElementsText',
        'themeFontColorsValues',
        'themeFontColorsText'
      ])
    }

}
</script>

<style lang="scss" >
@import './general.scss';
  .doc {
    background: white;
    padding: 0 1em;

    .variables {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: 1.5em;
    }
    h1, h2, h3, h4 {
      color: $dark;
    }
    .text {
      color: $medium-dark;
    }


    .colors, .themeColors {


    }
    .colors.variables {
      margin: 0 -1em 1.5em;
    }
    .colors {
        .color {
          margin: 1em;

        }
    }
    .fontColors {
      margin: 0 -1em;
      .fontColor {
        margin: 1em;
      }
    }
  }

</style>
