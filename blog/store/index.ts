import { $content } from '@nuxt/content'
import { GetterTree, ActionTree, MutationTree } from 'vuex'

let api = "http://localhost:1337"

export const state = () => ({
    api_url: api,
    navigation: {
      covid19 : {
        title: "covid19",
        keyword: "covid19"
      },
      about : {
        title: "about us",
        keyword: "about"
      },
      services : {
        title: "our services",
        keyword: "services"
      },
      departments : {
        title: "departments",
        keyword: "departments"
      },
      media : {
        title: "media center",
        keyword: "media"
      },
    },
    logo: {
      abbr : "",
      title: "",
      image: "",
    },
    homeData: {},
})

export type RootState = ReturnType<typeof state>

// GETTERS
export const getters: GetterTree<RootState, RootState> = {
    getStrapiAPI: state => state.api_url,
    getLogo: state =>  state.logo,
    getMainNavigation: state => state.navigation,
    getHomeData: state => state.homeData
}

// MUTATIONS
export const mutations: MutationTree<RootState> = {
  SET_LOGO: (state, payload) => {
    state.logo.abbr = payload.title
    state.logo.title = payload.description
    state.logo.image = state.api_url + payload.image.url
  },
  SET_HOMEPAGE_DATA: (state, payload) => {
    state.homeData = {...payload}
    console.log(state.homeData)
  },

}


// ACTIONS
export const actions: ActionTree<RootState, RootState> = {
  async setLogo({ commit }) {
    await this.$axios.$get('/logo')
    .then(res => {
      commit('SET_LOGO', res)
    })
    .catch(err => console.log(err))    
  },
  async setHomePage({ commit }) {
    commit('SET_HOMEPAGE_LOADING', true)
    await this.$axios.$get('/home-page')
    .then(res => {
      commit('SET_HOMEPAGE_DATA', res)
      return res
    })
    .catch(err => err)    
  },
}