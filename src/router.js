import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddMeal from "./views/AddMeal.vue";
import UserInfo from "./views/UserInfo.vue";
import DailyCalories from "./views/DailyCalories";
import MonthlyCalories from "./views/MonthlyCalories";

Vue.use(Router);

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? "hash" : "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          name: "daily",
          component: DailyCalories
        },
        {
          path: "monthly",
          name: "monthly",
          component: MonthlyCalories
        }
      ]
    },
    {
      path: "/addmeal",
      name: "addmeal",
      component: AddMeal
    },
    {
      path: "/userinfo",
      name: "userinfo",
      component: UserInfo
    }
  ],
  linkExactActiveClass: "menu-active"
});
