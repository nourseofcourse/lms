import axios from '@/plugins/axios'

export default {
  getLessons() {
    return axios.get('/lessons')
  },
  getLesson(id) {
    return axios.get('/lessons/' + id)
  }
}
