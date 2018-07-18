import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  showModal: false,
  mdMeta:[],
  mdContent:"",
  mdModiftime: [],
  axiosApi: {}
}

const mutations = {
    CHANGE_MODAL_STATE: (state, isShown) => {
        state.showModal = isShown
    },
    SAVE_MD_META: (state, meta) => {
      state.mdMeta = meta
    },
    SAVE_MODIF_TIME: (state, meta) => {
      state.mdModiftime = meta
    },
    SAVE_MD_CONTENT: (state, content) => {
      state.mdContent = content
    },
    INIT_API: (state, axiosObj) => {
      state.axiosApi = axiosObj
    }
}

const getters = {
    showModal: (state) => state.showModal,
    mdMeta: (state) => state.mdMeta,
    mdContent: (state) => state.mdContent,
}

const actions = {
    initApi: (store) => {
      store.commit('INIT_API',axios.create({baseURL: process.env.host + ":" + process.env.API_PORT}) )

    },
    changeModalState: (store, isShown) => {
      store.commit('CHANGE_MODAL_STATE', isShown)
    },

    getDocColors: (store) => {
      store.dispatch('initApi')
      state.axiosApi.get("/markdown/documentation/colors")
      .then(response => {
        store.commit("SAVE_MD_META", response.data.meta )
        store.commit("SAVE_MODIF_TIME", response.data.modified )
        store.commit("SAVE_MD_CONTENT", response.data.parsedContent )

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
