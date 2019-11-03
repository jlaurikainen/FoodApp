import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    meals: []
  },
  actions: {
    updateUser(state, user) {
      state.commit("setUserInfo", user);
    },
    updateMealList(state, mealInfo) {
      state.commit("addMealToList", mealInfo);
    }
  },
  mutations: {
    setUserInfo(state, user) {
      state.userInfo = user;
    },
    addMealToList(state, mealInfo){
      state.meals.push(mealInfo);
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
    },
    getTotalCalories(state) {
      let sum = 0;
      if(state.meals.length > 0){
        state.meals.forEach((meal) => {
          sum += parseFloat(meal.mealCalories);
        });
      }
      return sum;
    }
  }
})
