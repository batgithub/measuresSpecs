import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



const state = {
    showModal: false
}

const mutations = {
    CHANGE_MODAL_STATE: (state, isShown) => {
        state.showModal = isShown
    }
}

const getters = {
    showModal: state => state.showModal
}

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: {},
    strict: true
})
