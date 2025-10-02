import { createStore } from 'vuex'

export default createStore({
  state: {
    activeModule: 'consultas',
    activeSubmodule: 'consulta-alumno'
  },
  getters: {
    getActiveModule: (state) => state.activeModule,
    getActiveSubmodule: (state) => state.activeSubmodule
  },
  mutations: {
    SET_ACTIVE_MODULE(state, module) {
      state.activeModule = module
    },
    SET_ACTIVE_SUBMODULE(state, submodule) {
      state.activeSubmodule = submodule
    }
  },
  actions: {
    changeModule({ commit }, module) {
      commit('SET_ACTIVE_MODULE', module)
    },
    changeSubmodule({ commit }, submodule) {
      commit('SET_ACTIVE_SUBMODULE', submodule)
    }
  }
})