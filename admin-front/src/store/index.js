import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {}
  },

  getters: {
    isLoggedIn(state) {
      return state.user && Object.keys(state.user).length > 0;
    },

    name(state) {
      return state.user?.name ?? '';
    },

  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
  }
})
