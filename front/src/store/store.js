import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Api from '@/services/api'

const state = {
  showModal: false,
  dataApi: [],
  errors: []
}

const mutations = {
    CHANGE_MODAL_STATE: (state, isShown) => {
        state.showModal = isShown
    },
    GET_DATA_API: (state, pathToFolder) => {
      Api().get(pathToFolder)
      .then(response => {
        state.dataApi = response.data
      })
      .catch(e => {
        state.errors.push(e)
      })
    }
}

const getters = {
    showModal: state => state.showModal,
    dataApi: state => state.dataApi
}

const actions = {
    changeModalState: (store, isShown) => {
      store.commit('CHANGE_MODAL_STATE', isShown)
    },
    getDataApi: (store, pathToFolder) => {
      store.commit('GET_DATA_API', pathToFolder)
    }
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true
})
