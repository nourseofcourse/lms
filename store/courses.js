import CourseService from '~/services/CourseService.js'

export const mutations = {
  SET_COURSES(state, courses) {
    state.all = courses
  },
  SET_COURSE(state, course) {
    state.course = course
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
