import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  actions: {
    updateUser(state, user) {
      state.commit("setUserInfo", user);
    }
  },
  mutations: {
    setUserInfo(state, user) {
      state.userInfo = user;
    }
  },
  getters: {
    getCalorieLimit(state) {
      if(state.userInfo.sex == "male"){
        return 10 * parseFloat(state.userInfo.weight)
        + 6.25 * parseFloat(state.userInfo.height)
        - 5 * parseFloat(state.userInfo.age)
        + 5;
      }
      else {
        return 10 * parseFloat(state.userInfo.weight)
        + 6.25 * parseFloat(state.userInfo.height)
        - 5 * parseFloat(state.userInfo.age)
        - 161;
      }
    }
  }
})
