import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    store: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      setPosts(context) {
        context.commit('setPosts', context)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore