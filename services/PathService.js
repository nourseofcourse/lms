import axios from '@/plugins/axios'

export default {
  getPaths() {
    return axios.get('/paths')
  },
  getPath(id) {
    return axios.get('/paths/' + id)
  }
}
