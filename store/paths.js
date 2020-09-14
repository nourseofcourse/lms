import PathService from '~/services/PathService.js'

export const mutations = {
  SET_PATHS(state, paths) {
    state.all = paths
  },
  SET_PATH(state, path) {
    state.path = path
  }
}

export const actions = {
  fetchPaths({ commit }) {
    return PathService.getPaths().then(response => {
      commit('SET_PATHS', response.data)
    })
  },
  fetchPath({ commit }, id) {
    return PathService.getPath(id).then(response => {
      commit('SET_PATH', response.data)
    })
  }
}
