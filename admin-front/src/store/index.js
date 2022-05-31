import { createStore } from 'vuex'

const LOCAL_STORAGE_KEY = 'class-admin-key';

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
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
      } catch (e) {
        console.error(e)
      }
    }
  },

  actions: {
    getUserFromStorage(context) {
      try {
        let user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (user) {
          console.log('have user!');
          context.commit('setUser', user)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
})
