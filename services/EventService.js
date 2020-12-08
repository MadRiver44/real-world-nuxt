import axios from 'axios'
// configs axios instance
const apiClient = axios.create({
  baseURL: `https://github.com/Code-Pop/real-world-nuxt/blob/master/db.json`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
}
