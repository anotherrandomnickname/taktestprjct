import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const levelMock = [{
    src: require('./assets/analyst.svg'),
    level: 0,
    name: 'Trader',

    properties: {
      rating: 16.48,
      publications: 0,
      subs: 45,
      likes: 0,
    },
  },
  {
    src: require('./assets/analyst.svg'),
    level: 5,
    name: 'Analyst',
    properties: {
      rating: 8.11,
      publications: 1,
      subs: 88,
      likes: 8545,
    },
  },
  {
    src: require('./assets/mentor.svg'),
    level: 3,
    name: 'Mentor',
    properties: {
      rating: 0.456,
      publications: 64,
      subs: 1,
      likes: 4234,
    },
  },
]

const pageModule = {
  state: {
    user: {
      name: '',
      nickname: '',
      signUpDate: '',
    },
    rating: -1,
    publications: -1,
    subs: -1,
    likes: -1,
    structure: -1,
    levelTypes: levelMock,
  },

  actions: {
    async getUser({
      commit
    }) {
      try {
        //some async action
      } catch (e) {} finally {
        setTimeout(() => {
          commit('deployUser', {
            name: 'Michael Jones',
            nickname: '@michael_jones',
            signUpDate: '18.18.08',
          })
        }, 1000)
      }
    },
  },

  mutations: {
    deployUser(state, newState) {
      state.user = newState
    },
  },
}

export default new Vuex.Store({
  modules: {
    page: pageModule,
  },
})