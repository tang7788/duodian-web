import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import car from './car'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    a: 123,
    b: 123
  },
  getters: {
    getAdd (state) {
      return state.a + state.b
    }
  },
  mutations: {
    AET_A (state, payload) {
      state.a = payload
    }
  },
  actions: {
    seta (context, payload) {
      setTimeout(() => {
        context.commit('SET_A', payload)
      }, 2000)
    }
  },
  modules: {
    user,
    car
  }
})
export default store
