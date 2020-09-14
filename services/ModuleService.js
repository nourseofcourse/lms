import axios from '@/plugins/axios'

export default {
  getModules() {
    return axios.get('/modules')
  },
  getModule(id) {
    return axios.get('/module/' + id)
  }
}
