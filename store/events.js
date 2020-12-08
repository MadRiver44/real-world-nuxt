import EventService from '@/services/EventService.js'

/**
 * * Important: we need to ALWAYS use an anonymous function
 * * to avoid shared state with server. Server will create only 1 state instance
 */
export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
}
export const actions = {
  /**
   * * We Need to return a Promise from our fetch event action, this will help
   * * the component know when this Promise is resolved so it can continue
   * * loading the page
   *
   */
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  },
}
