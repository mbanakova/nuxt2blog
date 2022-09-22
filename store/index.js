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
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: "1",
                thumbnail:
                  "https://avatars.mds.yandex.net/i?id=d4ae57cb191775e69710b6bd114ae98e-5234329-images-thumbs&ref=rim&n=33&w=276&h=188",
                title: "The Tower of London",
                previewText:
                  "His Majesty's Royal Palace and Fortress of the Tower of London",
              },
              {
                id: "2",
                thumbnail:
                  "https://avatars.mds.yandex.net/i?id=d4ae57cb191775e69710b6bd114ae98e-5234329-images-thumbs&ref=rim&n=33&w=276&h=188",
                title: "The Tower of London",
                previewText:
                  "His Majesty's Royal Palace and Fortress of the Tower of London",
              },
            ])
            resolve();
          }, 2000);
        })
      },
      setPosts(vuexContext) {
        vuexContext.commit('setPosts', vuexContext)
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