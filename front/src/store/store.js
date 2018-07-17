import Vue from 'vue'
import Vuex from 'vuex'
import Api from '@/services/api'
Vue.use(Vuex)

const state = {
  showModal: false,
  mdMeta:[],
  mdModiftime: []
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
    }
}

const getters = {
    showModal: (state) => state.showModal,
    mdMeta: (state) => state.mdMeta,
}

const actions = {
    changeModalState: (store, isShown) => {
      store.commit('CHANGE_MODAL_STATE', isShown)
    },
    getDocColors: (store, link) => {
      Api().get("/markdown/documentation/colors")
      .then(response => {
        store.commit("SAVE_MD_META", response.data.meta )
        store.commit("SAVE_MODIF_TIME", response.data.modified )

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
