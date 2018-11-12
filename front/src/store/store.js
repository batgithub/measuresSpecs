import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  showModal: false,
  colorsValues:[],
  colorsText:"",
  themeValues:[],
  themeText:"",
  themeElementsValues:[],
  themeElementsText:"",
  themeFontColorsValues:[],
  themeFontColorsText:"",
  colorsModifiedTime: [],
  docEmail: "",
  axiosApi: {}
}

const mutations = {
    CHANGE_MODAL_STATE: (state, isShown) => {
        state.showModal = isShown
    },
    SAVE_COLORS_DATA: (state, meta) => {
      state.colorsValues = meta.meta
      state.colorsModifiedTime = meta.modified
      state.colorsText = meta.parsedContent
    },
    SAVE_THEME_DATA: (state, meta) => {
      state.themeValues = meta.meta
      state.themeText = meta.parsedContent
    },
    SAVE_THEME_ELEMENTS_DATA: (state, meta) => {
      state.themeElementsValues = meta.meta
      state.themeElementsText = meta.parsedContent
    },
    SAVE_THEME_FONT_COLORS_DATA: (state, meta) => {
      state.themeFontColorsValues = meta.meta
      state.themeFontColorsText = meta.parsedContent
    },
    INIT_API: (state, axiosObj) => {
      state.axiosApi = axiosObj
    },
    SAVE_EMAIL_DOC: (state, meta) => {
      state.docEmail = meta.meta
      state.docEmail = meta.parsedContent
    },
}

const getters = {
    showModal: (state) => state.showModal,
    colorsValues: (state) => state.colorsValues,
    colorsText: (state) => state.colorsText,
    themeValues: (state) => state.themeValues,
    themeText: (state) => state.themeText,
    themeElementsValues: (state) => state.themeElementsValues,
    themeElementsText: (state) => state.themeElementsText,
    themeFontColorsValues: (state) => state.themeFontColorsValues,
    themeFontColorsText: (state) => state.themeFontColorsText,
    docEmail: (state) => state.docEmail
}

const actions = {
    initApi: (store) => {
      store.commit('INIT_API',axios.create({baseURL: process.env.host + ":" + process.env.API_PORT}) )

    },
    changeModalState: (store, isShown) => {
      store.commit('CHANGE_MODAL_STATE', isShown)
    },

    getDocColors: (store) => {
      state.axiosApi.get("/markdown/documentation/colors")
      .then(response => {
        store.commit("SAVE_COLORS_DATA", response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getDocTheme: (store) => {
      state.axiosApi.get("/markdown/documentation/theme")
      .then(response => {
        store.commit("SAVE_THEME_DATA", response.data)

      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getDocThemeElements: (store) => {
      state.axiosApi.get("/markdown/documentation/theme_elements")
      .then(response => {
        store.commit("SAVE_THEME_ELEMENTS_DATA", response.data)

      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getDocThemeFontColors: (store) => {
      state.axiosApi.get("/markdown/documentation/theme_font_colors")
      .then(response => {
        store.commit("SAVE_THEME_FONT_COLORS_DATA", response.data)

      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    getdocEmail: (store) => {
      state.axiosApi.get("/markdown/documentation/email")
      .then(response => {
        store.commit("SAVE_EMAIL_DOC", response.data)

      })
      .catch(e => {
        this.errors.push(e)
      })
    }
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true
})
