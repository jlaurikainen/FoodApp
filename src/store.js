import Vue from 'vue'
import Vuex from 'vuex'
import Dexie from 'dexie';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    meals: [],
    userdb: null,
    mealdb: null
  },
  actions: {
    async updateMealList(state) {
      let date = new Date(new Date().setHours(0,0,0,0));
      
      const mealdb = new Dexie("mealdb");
        
      mealdb.version(1).stores({
        mealsByDate: "++id, date"
      });

      const meals = await mealdb.mealsByDate.where("date").equals(date).toArray();
      
      state.commit("SET_MEALS", meals);

      mealdb.close();
    },
    async checkUser(state, router) {
      const _router = router.router;

      const userdb = new Dexie("userdb");
        
      userdb.version(1).stores({
        user: "++id"
      });

      await userdb.user.get(1, (user) => {
        if(user == null) {
          _router.push("/userinfo").catch((err) => {});
        }
        else {
          state.commit("SET_USER_INFO", user);
          _router.push("/").catch((err) => {});
        }
      });

      userdb.close();
    }
  },
  mutations: {
    SET_USER_INFO(state, user) {
      state.userInfo = user;
    },
    SET_MEALS(state, meals) {
      state.meals = [];

      meals.forEach((meal) => {
        state.meals.push(meal);
      });
    }
  },
  getters: {
    getCalorieLimit(state) {
      if(state.userInfo.sex == "male"){
        return parseInt(10 * parseFloat(state.userInfo.weight)
        + 6.25 * parseFloat(state.userInfo.height)
        - 5 * parseFloat(state.userInfo.age)
        + 5);
      }
      else {
        return parseInt(10 * parseFloat(state.userInfo.weight)
        + 6.25 * parseFloat(state.userInfo.height)
        - 5 * parseFloat(state.userInfo.age)
        - 161);
      }
    },
    getTotalCalories(state) {
      let sum = 0;
      if(state.meals.length > 0){
        state.meals.forEach((meal) => {
          sum += parseFloat(meal.calories);
        });
      }
      return sum;
    }
  }
})
