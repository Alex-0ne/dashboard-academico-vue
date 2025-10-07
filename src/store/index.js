import { createStore } from 'vuex'

export default createStore({
  state: {
    activeModule: '',
    activeSubmodule: ''
  },
  mutations: {
    setActiveModule(state, module) {
      state.activeModule = module
    },
    setActiveSubmodule(state, submodule) {
      state.activeSubmodule = submodule
    }
  },
  actions: {
    changeModule({ commit }, module) {
      commit('setActiveModule', module)
    },
    changeSubmodule({ commit }, submodule) {
      commit('setActiveSubmodule', submodule)
    }
  },
  getters: {
    getActiveModule: (state) => state.activeModule,
    getActiveSubmodule: (state) => state.activeSubmodule
  }
})