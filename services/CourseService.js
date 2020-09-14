import axios from '@/plugins/axios'

export default {
  getCourses() {
    return axios.get('/courses')
  },
  getCourse(id) {
    return axios.get('/courses/' + id)
  }
}
