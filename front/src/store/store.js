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
  colorsModifiedTime: [],
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
    INIT_API: (state, axiosObj) => {
      state.axiosApi = axiosObj
    }
}

const getters = {
    showModal: (state) => state.showModal,
    colorsValues: (state) => state.colorsValues,
    colorsText: (state) => state.colorsText,
    themeValues: (state) => state.themeValues,
    themeText: (state) => state.themeText,
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
    }
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true
})
