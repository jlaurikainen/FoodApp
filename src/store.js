import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    date: new Date(),
    calorieLimit: 2000,
    caloriesGained: 1398
  },
  mutations: {},
  actions: {},
  getters: {
    dateString: state => {
      return state.date.getDate() + '.'
      + (parseInt(state.date.getMonth()) + 1) + '.'
      + state.date.getFullYear();
    },
    getCalorieLimit: state => {
      return state.calorieLimit;
    },
    getCaloriesGained: state => {
      return state.caloriesGained;
    }
  }
});
